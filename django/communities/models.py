from django.db import models
from django.conf import settings
from movies.models import Movie, Genre


class Taste(models.Model):
    taste_name = models.CharField(max_length=20)
    genres = models.ManyToManyField(Genre, related_name='tastes')

    def __str__(self):
        return self.taste_name


class Food(models.Model):
    food_name = models.CharField(max_length=50)    
    food_image = models.TextField()
    taste = models.ManyToManyField(Taste, related_name="food_taste")

    def __str__(self):
        return self.food_name
        

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



