from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from . import serializers
from .models import Product


# Create your views here.


@api_view(["GET", "POST"])
def product_list(request, format=None):

    if request.method == "GET":
        products = Product.objects.all()
        serializer = serializers.ProductSerializer(products, many=True)
        return Response(serializer.data)
    if request.method == "POST":
        serializer = serializers.ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=400)


@api_view(["GET", "PUT", "DELETE", "PATCH"])
def product_detail(request, id, format=None):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = serializers.ProductSerializer(product)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = serializers.ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "PATCH":
        serializer = serializers.ProductSerializer(
            product, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
