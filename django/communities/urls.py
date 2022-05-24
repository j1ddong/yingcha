from django.urls import path
from . import views

app_name='communities'
urlpatterns = [
    path('create/', views.create_article, name='create_article'),
    # path('create/<int:article_pk>/', views.create_article, name='create_article'),
    path('search/movie', views.search_movie, name='search_movie'), 
    path('search/food', views.search_food, name='search_food'),
    path('food/<int:food_pk>/', views.get_article_list, name="get_article_list"),
    path('recommend/', views.recommend)

]
