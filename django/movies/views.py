from django.shortcuts import get_object_or_404, get_list_or_404
from .models import Genre, Movie, Director, Actor, Review
import random
from .serializers import DirectorSerializer, ActorSerializer, MovieDirectorSerializer, MovieReviewSerializer, MovieSerializer, ReviewSerializer, ReviewUpdateSerializer
from rest_framework.response import Response
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from .recommend import recommend as reco


API_KEY = '44f9d36b9d8fa8e880839899c577f866'
URL_BASE = 'https://api.themoviedb.org/3'
params = {'api_key': API_KEY, 'language': 'ko', 'region': 'KR'}
# PATH = f'/movie/{movie_id}'  # movie.detail
# r1 = requests.get(URL_BASE + PATH, params=params) 
# movie = r1.json()

def index(request):

    # 4. tmdb에서 장르별 영화 받아오기
    # 1) 장르 리스트에서 id값만 받아온다. --> 가장 보편적인 10개 선정
    genre_id = [18, 27, 28, 35, 53, 10749, 16, 12, 80, 878]
    movies_json = []
    # 2. genreid로 movie에 접근
    for pk in genre_id:
        genre = get_object_or_404(Genre, pk=pk)
        # print(genre)
        movies = genre.movies.all() # random으로 하나 추출 
        movie_genre = random.choice(movies)

        def check(movie_genre, movies_json):
            while movie_genre in movies_json:
                movie_genre = random.choice(movies)
            return movie_genre
            

        # random_one이 result 배열 내에 없으면, result에 넣기
        chosen_movie = check(movie_genre, movies_json)
    
        movies_json.append(
            {
                'id' : chosen_movie.pk,
                'title': chosen_movie.title,
                'poster_url': chosen_movie.poster_url,
                'genre': genre.name,
                # 'release_date' : movie_genre.release_date,
                # 'description': movie_genre.description,
                # 'run_time': movie_genre.run_time,
                # 'original_title': movie_genre.original_title,
                # 'adult': movie_genre.adult,
                # 'country': movie_genre.country,
                # 'actor': movie_genre.actor,
                # 'director': movie_genre.director,
                # 'provider': movie_genre.provider,
            })
    
    # print(movies_json)

    return JsonResponse(movies_json, safe=False)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def director(request, director_pk):
    director = get_object_or_404(Director, pk=director_pk)
    serializer = DirectorSerializer(director)
    return Response(serializer.data)


@api_view(['GET'])
def actor(request, actor_pk):
    actor = get_object_or_404(Actor, pk=actor_pk)
    serializer = ActorSerializer(actor)
    return Response(serializer.data)


@api_view(['GET'])
def movie_director(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieDirectorSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def reviews(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieReviewSerializer(movie)
    return Response(serializer.data)


@api_view(['PUT', 'DELETE'])
def review_update_or_delete(request, movie_pk, review_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = get_object_or_404(Review, pk=review_pk)

    def update_review():
        if request.user == review.user:
            serializer = ReviewUpdateSerializer(review, request.data)
            print(request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                reviews = movie.review_set.all()
                serializer = ReviewUpdateSerializer(reviews, many=True)
                return Response(serializer.data)

    def delete_review():
        if request.user == review.user:
            review.delete()
            reviews = movie.review_set.all()
            serializer = ReviewUpdateSerializer(reviews, many=True)
            return Response(serializer.data)

    if request.method == 'PUT':
        return update_review()
    elif request.method == 'DELETE':
        return delete_review()


@api_view(['POST'])
def like_review(request, movie_pk, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user

    if review.like_user.filter(pk=user.pk).exists():
        review.like_user.remove(user)
        reviews = movie.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)
    else:
        review.like_user.add(user)
        reviews = movie.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def create_review(request, movie_pk):
    user = request.user
    movie = get_object_or_404(Movie, pk=movie_pk)
    
    serializer = ReviewUpdateSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie, user=user)
        reviews = movie.review_set.all()
        serializer = ReviewUpdateSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def recommend(request):
    reco()
    return