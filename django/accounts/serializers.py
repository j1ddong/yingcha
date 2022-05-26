from rest_framework import serializers
from django.contrib.auth import get_user_model
from communities.models import Article, Food
from movies.models import Movie

class ProfileSerializer(serializers.ModelSerializer):

    class ArticleSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Article
            fields = ('pk', 'title', 'content', 'food', 'movie',)

    like_articles = ArticleSerializer(many=True)  # 내가 좋아요한 조합
    article_set = ArticleSerializer(many=True)  # 내가 작성한 조합
    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'like_articles', 'article_set',)
