"""
A mixin is a class that contains methods for use by
other classes without having to be the parent class 
of those other classes

self - instance method
"""

from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status, viewsets

from api.serializers import ProductSerializer
from api.models import Product

from django.shortcuts import get_object_or_404

from rest_framework import mixins
from rest_framework import generics


class ProductListAPIView(mixins.ListModelMixin, 
                        mixins.CreateModelMixin, 
                        generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    

    

class ProductDetailAPIView(mixins.RetrieveModelMixin, # for get by pk method
                           mixins.UpdateModelMixin, 
                           mixins.DestroyModelMixin, 
                           generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    



