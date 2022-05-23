from pyexpat import model
from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.models import Movie

from .models import Article, Food, Taste
from movies.serializers import MovieSerializer

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


class FoodListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Food
        fields = ('id', 'food_name',)

class ArticleSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    like_users = UserSerializer(read_only=True, many=True)
    food = FoodSerializer()
    movie = MovieSerializer()

    class Meta:
        model = Article
        fields = ('pk', 'user', 'title', 'content', 'like_users', 'food', 'movie',)