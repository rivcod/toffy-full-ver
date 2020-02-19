from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TfgameSerializer
from .models import Tfgame

def croll(request):
    return render(request, 'croll.html')

class TfgameView(viewsets.ModelViewSet):
    serializer_class = TfgameSerializer
    queryset = Tfgame.objects.all()

    # 해당 뷰는 viewsets을 통해서 get, post, put, delete 의 기능 제공
