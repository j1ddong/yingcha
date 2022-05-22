from django.urls import path
from . import tmdbapi
from . import views
urlpatterns = [
    # path('get_1000/', tmdbapi.get_1000),
    # path('get_top_rated/', tmdbapi.get_top_rated),
    path('', views.index, name='index'),
    path('director/<int:director_pk>/', views.director, name='director'),
    path('actor/<int:actor_pk>/', views.actor, name='actor'),

]
