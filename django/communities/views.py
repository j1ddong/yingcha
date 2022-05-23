from django.shortcuts import render
from .models import Food
from .serializers import ArticleSerializer, FoodListSerializer
from movies.serializers import MovieListSerializer
from movies.models import Movie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status



@api_view(['POST'])
def create_article(request):
    serializer = ArticleSerializer(data=request.data)    
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
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
    print(serializers.data)
    return Response(serializers.data)