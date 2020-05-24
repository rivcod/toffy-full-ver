from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TfnoteSerializer
from .models import Tfnote

def croll(request):
    return render(request, 'croll.html')

class TfnoteView(viewsets.ModelViewSet):
    serializer_class = TfnoteSerializer
    queryset = Tfnote.objects.all()