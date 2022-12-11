from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend

from . import serializers
from .models import Product


class ProductView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['id', 'brand']
    
