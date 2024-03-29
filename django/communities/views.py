from django.shortcuts import get_object_or_404
from .models import Food, Article
from .serializers import ArticleSerializer, FoodListSerializer, RecommendMovieSerializer, ArticleDetailSerializer
from movies.serializers import MovieListSerializer
from movies.models import Movie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import random



@api_view(['POST'])
def create_article(request):
    serializer = ArticleSerializer(data=request.data)    
    food = get_object_or_404(Food, pk=request.data['food_id'])
    movie = get_object_or_404(Movie, pk=request.data['movie_id'])
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user, food=food, movie=movie)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def search_movie(request):
    keyword = request.GET.get('keyword')
    movies = Movie.objects.filter(title__icontains=keyword)[:10]
    serializers = MovieListSerializer(movies, many=True)
    return Response(serializers.data)

@api_view(['GET'])
def search_food(request):
    food = request.GET.get('food')
    foods = Food.objects.filter(food_name__icontains=food)[:10]

    serializers = FoodListSerializer(foods, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def get_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['GET'])
def get_article_list(request, food_pk):
    food = get_object_or_404(Food, pk=food_pk)
    articles = food.article_set.all()
    serializers = ArticleDetailSerializer(articles, many=True)
    return Response(serializers.data)


@api_view(['GET'])
def search_movie_title(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieListSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def search_food_title(request, food_pk):
    food = get_object_or_404(Food, pk=food_pk)
    serializer = FoodListSerializer(food)
    return Response(serializer.data)

@api_view(['PUT'])
def edit_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    if request.user == article.user:
        serializer = ArticleSerializer(instance=article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['DELETE'])
def delete_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    if request.user == article.user:
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def recommend(request, food_pk):
    food = get_object_or_404(Food, pk=food_pk)
    tastes = food.taste.all()  # <QuerySet [<Taste: umami>, <Taste: oily>]>
    taste = random.choice(tastes)
    genres = taste.genres.all()
    movies = []
    for genre in genres:
        movies.append(genre.movies.order_by('?').first())
    serializer = RecommendMovieSerializer(movies, many=True)
    return Response(serializer.data)


