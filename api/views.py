from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view, action
from rest_framework.response import Response
from rest_framework import status, viewsets

from .serializers import ProductSerializer, CategorySerializer
from .models import Product, Category


# Create your views here.

# def show_products(request):
#     products = list(Product.objects.values())
#     return JsonResponse(list(products), safe = False)

# def show_categories(request):
#     categories = list(Category.objects.values())
#     return JsonResponse(categories, safe = False)

# def get_product(request):

#     product = Product.objects.get(pk=3)
#     return render(request, 'page1.html', {'product' : product.name})

# def get_category(request):

#     category = Category.objects.get(pk=3)
#     return render(request, 'page2.html', {'category' : category.name})

# def get_list(request):

#     c = Category.objects.get(pk=3)
    
#     list_products = Product.objects.filter(category__id = 3)
#     return render(request, 'page3.html', {'list' : list(list_products), 'category' : c.name})


# def get_list_json(request):
    
#     list_products = Product.objects.filter(category__id = 3).values()
#     return JsonResponse(list(list_products), safe = False)


# -----------------------| Lab 9 |-------------------------


# @api_view(['GET'])
# def show_categories(request):
#     categories = Category.objects.all()
#     serializer = CategorySerializer(categories, many = True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def create_category(request):
#     serializer = CategorySerializer(data = request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status = status.HTTP_201_CREATED)
#     return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def get_category(request, pk):
#     try:
#         category = Category.objects.get(pk = pk)
#     except Category.DoesNotExist:
#         return Response(status = status.HTTP_404_NOT_FOUND)
#     serializer = CategorySerializer(category)
#     return Response(serializer.data)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def update(self, request, *args, **kwargs):
        category = self.get_object()
        serializer = CategorySerializer(category, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, *args, **kwargs):
        category = self.get_object()

        # prevent deleting if products exist
        if Product.objects.filter(category=category).exists():
            return Response(
                {"error": "Cannot delete category with products"},
                status=status.HTTP_400_BAD_REQUEST
            )

        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer