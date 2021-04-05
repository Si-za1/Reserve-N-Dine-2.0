from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=50, null=False)
    price = models.DecimalField(null=False, max_digits=6, decimal_places=2)
    # image = models.ImageField(null=True)
    about_item = models.TextField(null=True)
    category_choices = (
        ('drinks', 'Drinks'),
        ('appetizer', 'Appetizer'),
        ('main course', 'Main Course'),
        ('dessert', 'Dessert'),
    )
    category = models.CharField(max_length=20, choices=category_choices, null=False)
    available = models.BooleanField(default=False, null=False)