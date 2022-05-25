from django.shortcuts import get_object_or_404
from .models import Food, Article
from .serializers import ArticleSerializer, FoodListSerializer
from movies.serializers import MovieIdSerializer, MovieListSerializer
from movies.models import Movie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['POST'])
def create_article(request):
    print(request.data)
    # print('------------------')
    serializer = ArticleSerializer(data=request.data)    
    # print(serializer)
    # print('------------------')
    food = get_object_or_404(Food, pk=request.data['food_id'])
    movie = get_object_or_404(Movie, pk=request.data['movie_id'])
    # print(food, movie)
    # print(type(food), type(movie))
    # print('------------------')
    if serializer.is_valid(raise_exception=True):
        # print('ok') # 여기까진 출력됨
        serializer.save(user=request.user, food=food, movie=movie)
        # print(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def search_movie(request):
    # print(request)
    keyword = request.GET.get('keyword')
    # print(keyword) #여기에 한글이 정상적으로 온다.
    movies = Movie.objects.filter(title__icontains=keyword)[:10]
    # print(movies)
    serializers = MovieListSerializer(movies, many=True)
    # print(serializers.data)
    return Response(serializers.data)
    # if movies != None:
    #     serializers = MovieListSerializer(movies, many=True)
    #     return Response(serializers.data)
    # else:
    #     data = {
    #         data: '검색 결과가 없습니다.'
    #     }
    #     return Response(data)


@api_view(['GET'])
def search_food(request):
    # print(request)
    # print('------------------')
    food = request.GET.get('food')
    # print(food) #여기에 한글이 정상적으로 온다.
    # print('------------------')
    foods = Food.objects.filter(food_name__icontains=food)[:10]
    # print(foods)
    # print('------------------')

    serializers = FoodListSerializer(foods, many=True)
    # print(serializers.data)
    return Response(serializers.data)


@api_view(['GET'])
def get_article(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['GET'])
def get_article_list(request, food_pk):
    # print(request)
    food = get_object_or_404(Food, pk=food_pk)
    articles = food.article_set.all()
    # print(articles)
    serializers = ArticleSerializer(articles, many=True)
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
