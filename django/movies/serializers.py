from msilib.schema import MoveFile
from rest_framework import serializers
from .models import Movie, Genre, Director, Actor, Provider, Review, Reply
from django.contrib.auth import get_user_model

User = get_user_model()

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = '__all__'
    

class DirectorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Director
        fields = '__all__'


class ActorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = '__all__'


class ProviderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Provider
        fields = '__all__'


class MovieIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id',)
        

class MovieSerializer(serializers.ModelSerializer):
    
    genres = GenreSerializer(many=True, read_only=True)
    directors = DirectorSerializer(many=True, read_only=True)
    actors = ActorSerializer(many=True, read_only=True)
    providers = ProviderSerializer(many=True, read_only=True)


    class Meta:
        model = Movie
        fields = '__all__' 


class MovieDirectorSerializer(serializers.ModelSerializer):
    directors = DirectorSerializer(many=True, read_only=True)
    
    class Meta:
        model = Movie
        fields = ('id', 'directors',)


class ReviewSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('pk', 'user', 'content', 'movie', 'like_user')
        read_only_fields = ('movie',)


class MovieReviewSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    review_set = ReviewSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('pk', 'review_set', 'user')

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields =('id', 'title',)


class ReviewUpdateSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ('pk', 'user', 'content', 'movie',)
        read_only_fields = ('movie',)