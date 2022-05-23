from django.shortcuts import render
from .serializers import ArticleSerializer
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


def search(request):
    keyword = request.GET.get('keyword')
    # print(keyword) 이게 None이 뜬다.
    movies = Movie.objects.filter(title__icontains=keyword)
    if movies != None:
        serializers = MovieListSerializer(movies, many=True)
        return Response(serializers.data)
    else:
        data = {
            data: '검색 결과가 없습니다.'
        }
        return Response(data)