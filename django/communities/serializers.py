from pyexpat import model
from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.models import Movie

from .models import Article, Food, Taste
from movies.serializers import MovieSerializer, MovieIdSerializer

User = get_user_model()


class TasteSerializer(serializers.ModelSerializer):
        class Meta:
            model = Taste
            fields = '__all__'


class FoodSerializer(serializers.ModelSerializer):

    taste = TasteSerializer(many=True)

    class Meta:
        model = Food
        fields = ('id', 'food_name', 'food_image', 'taste',)

class FoodIdSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food
        fields = ('id')


class FoodListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food
        fields = ('id', 'food_name', 'food_image',)

class ArticleSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    # like_users = UserSerializer(read_only=True, many=True)
    # food_id = FoodIdSerializer(read_only=True)
    # movie_id = MovieIdSerializer(read_only=True)

    class Meta:
        model = Article
        fields = ('pk', 'user', 'title', 'content','food_id', 'movie_id',)
        read_only_fields = ('food_id', 'movie_id',)