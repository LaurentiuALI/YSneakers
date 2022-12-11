from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from django.http import JsonResponse

from . import serializers
from .models import Product


class ProductView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['id', 'brand']
    search_fields = ['brand', 'id']

class ProductDestroy(generics.DestroyAPIView):
    queryset = Product.objects.all()
    lookup_field = 'id'

    def delete(self, request, *args, **kwargs):
        product_id = request.data.get('id')
        response = super().delete(request, *args, **kwargs)
        print(product_id)
        if response.status_code == 204:
            from django.core.cache import cache
            cache.delete('product_data{}'.format(product_id))
        return response


    
