from django.urls import path
from . import views

app_name='communities'
urlpatterns = [
    path('create/', views.create_article, name='create_article')

]
