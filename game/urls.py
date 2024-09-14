# game/urls.py
from django.urls import path
from game.views import index , play  # 确保 views 文件中定义了 index 视图

urlpatterns = [
            path('', index, name='index'),
            path('play/' , play , name = 'play'),
            ]

