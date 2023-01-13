from django.db import models
import random
import string


def generate_code():
    length = 12
    while True:
        code = ''.join(random.choices(
            string.ascii_uppercase + string.digits, k=length))
        if Product.objects.filter(code=code).count() == 0:
            break
    return code


class Product(models.Model):

    code = models.CharField(max_length=12, unique=True,
                            default=generate_code)
    model = models.CharField(max_length=100, default='')
    brand = models.CharField(max_length=100, default='')
    color = models.CharField(max_length=100, default='')
    gender = models.CharField(max_length=10, default='')
    release_year = models.CharField(max_length=4, default='')
    size = models.CharField(max_length=3, default='')
    photos = models.FileField(default="1.jpg")
    condition = models.CharField(max_length=20, default='')
    starting_price = models.DecimalField(
        max_digits=10, decimal_places=2, default=0.00)
    created_at = models.DateTimeField(auto_now_add=True)
