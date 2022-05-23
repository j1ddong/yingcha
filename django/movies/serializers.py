from attr import fields
from rest_framework import serializers
from .models import Movie, Genre, Director, Actor, Provider, Review, Reply


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


class MovieReviewSerializer(serializers.ModelSerializer):

    class ReviewSerializer(serializers.ModelSerializer):

        class Meta:
            model = Review
            fields = '__all__'

    review_set = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = ('id', 'review_set',)

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields =('id', 'title',)

