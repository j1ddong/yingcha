from django.urls import path
from . import tmdbapi
from . import views
urlpatterns = [
    # path('get_1000/', tmdbapi.get_1000),
    # path('get_top_rated/', tmdbapi.get_top_rated),
    path('', views.index, name='index'),
    path('<int:movie_pk>/', views.movie_detail),
    path('director/<int:director_pk>/', views.director, name='director'),
    path('actor/<int:actor_pk>/', views.actor, name='actor'),
    path('movie/director/<int:movie_pk>/', views.movie_director),
    path('reviews/<int:movie_pk>/', views.reviews),
    path('<int:movie_pk>/reviews/<int:review_pk>/', views.review_update_or_delete),
    path('<int:movie_pk>/<int:review_pk>/like/', views.like_review),
    path('<int:movie_pk>/reviews/', views.create_review),
    path('recommend/', views.recommend)
]
