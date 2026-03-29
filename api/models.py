from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 255)

class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.DecimalField(max_digits = 7, decimal_places = 2)
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField(default = False)
    category = models.ForeignKey(Category, on_delete = models.CASCADE)




