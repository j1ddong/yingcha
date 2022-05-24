from django.urls import path
from . import views

app_name='communities'
urlpatterns = [
    path('create/', views.create_article, name='create_article'),
    path('search/movie', views.search_movie, name='search_movie'), 
    path('search/food', views.search_food, name='search_food'), 

]
