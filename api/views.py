from django.shortcuts import render
from rest_framework import generics
from .serializers import ItemSerializer
from .models import Item
from django.http import HttpResponse

# Create your views here.


class ItemView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

def hi(request):
    return HttpResponse('hi there')