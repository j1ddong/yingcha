from attr import fields
from rest_framework import serializers
from .models import Movie, Genre, Director, Actor, Provider


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
    
    genre = GenreSerializer(many=True, read_only=True)
    director = DirectorSerializer(many=True, read_only=True)
    actor = ActorSerializer(many=True, read_only=True)
    provider = ProviderSerializer(many=True, read_only=True)


    class Meta:
        model = Movie
        fields = '__all__' 