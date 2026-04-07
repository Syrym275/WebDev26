from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status, viewsets

from api.serializers import ProductSerializer
from api.models import Product

from django.shortcuts import get_object_or_404

from rest_framework.views import APIView

"""
serializer parameter differrence, (book, data = sthsth)
"""

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data, status = 200)
    
    def post(self, request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)


class ProductDetailAPIView(APIView):
    def get_object(self, pk):
        return get_object_or_404(Product, pk = pk)

    def get(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status = 200)
    
    def put(self, request, pk):
        product = self.get_object(pk)
        serializer = ProductSerializer(product, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = 400)

    def delete(self, pk):
        product = self.get_object(pk)
        product.delete()
        return Response(status = 204)