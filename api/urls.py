from django.urls import path
from .views import CategoryViewSet, ProductViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)


urlpatterns = router.urls

# urlpatterns = [
#     path('categories/', views.show_categories),
#     path('categories/<int:pk>', views.get_category),
#     path('categories/create/', views.create_category),


#     # Lab 8
#     # path('products/', views.show_products),
#     # path('product/', views.get_product),
#     # path('category/', views.get_category),
#     # path('list/', views.get_list),
#     # path('listjson/', views.get_list_json),
# ]

