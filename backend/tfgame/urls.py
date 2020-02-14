from django.urls import path
from tfgame.views import croll

urlpatterns = [
    path('croll/', croll),
]
