from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WiseSayingSerializer
from .models import WiseSaying


class WiseSayingView(viewsets.ModelViewSet):
    serializer_class = WiseSayingSerializer
    queryset = WiseSaying.objects.all()

    # 해당 뷰는 viewsets을 통해서 get, post, put, delete 의 기능 제공