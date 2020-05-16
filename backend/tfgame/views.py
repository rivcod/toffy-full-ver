from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TfgameSerializer
from .models import Tfgame

def croll(request):
    return render(request, 'croll.html')

class TfgameView(viewsets.ModelViewSet):
    serializer_class = TfgameSerializer
    queryset = Tfgame.objects.all()
