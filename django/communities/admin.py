from django.contrib import admin
from .models import Food, Article, Comment, BlackList
# Register your models here.
admin.site.register(Food)
admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(BlackList)
