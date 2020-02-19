"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path, include
from rest_framework import routers

# 8000
from tfuser.views import index, RegisterView, LoginView

router = routers.DefaultRouter()
from oneLine import views
router.register('wisesaying', views.WiseSayingView, 'wisesaying')
from tfgame import views
router.register('tfgame', views.TfgameView, 'tfgame')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tfgame/', include('tfgame.urls')),
    path('', index),
    path('signUp/', RegisterView.as_view()),
    path('signIn/', LoginView.as_view()),
    path('api/', include(router.urls))
]
# localhost:8000/api/wisesaying 에 접속하면 api를 볼 수 있다.