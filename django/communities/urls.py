from django.urls import path
from . import views

app_name='communities'
urlpatterns = [
    path('create/', views.create_article, name='create_article'),
    path('<int:article_pk>/', views.get_article, name='get_article'),
    path('<int:article_pk>/edit/', views.edit_article, name='edit_article'),
    path('<int:article_pk>/delete/', views.delete_article, name='delete_article'),
    path('search/movie', views.search_movie, name='search_movie'), 
    path('search/food', views.search_food, name='search_food'),
    path('search/movie/<int:movie_pk>/', views.search_movie_title, name="search_movie_title"), 
    path('search/food/<int:food_pk>/', views.search_food_title, name="search_food_title"),
    path('food/<int:food_pk>/', views.get_article_list, name="get_article_list"),
]
