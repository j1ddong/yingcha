from django.db import models
from django.conf import settings


class Genre(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)


class Director(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


class Actor(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)


class Provider(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)


class Movie(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    description = models.CharField(max_length=300)
    run_time = models.IntegerField()
    country = models.CharField(max_length=30)
    original_title = models.CharField(max_length=100)
    adult = models.BooleanField()
    poster_url = models.TextField()
    genres = models.ManyToManyField(Genre, related_name='movies')  
    directors = models.ManyToManyField(Director, related_name='movies')
    actors = models.ManyToManyField(Actor, related_name='movies')
    providers = models.ManyToManyField(Provider, related_name='movies')

    def __str__(self) :
        return self.title


class Review(models.Model):
    vote_average = models.IntegerField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    like_user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews')


class Reply(models.Model):
    content = models.TextField()
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


