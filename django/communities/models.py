from django.db import models
from django.conf import settings
from ..movies.models import Movie, Genre

# Create your models here.
class Food(models.Model):
    food_name = models.CharField(max_length=50)    
    food_image = models.TextField()
    blacklist = models.ManyToManyField(Genre, through='BlackList')

class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_articles')
    title = models.CharField(max_length=150)
    content = models.TextField()    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()


# Food, Genre간 중개 테이블; 추천 알고리즘에 사용
class BlackList(models.Model):       
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    dislike = models.IntegerField()