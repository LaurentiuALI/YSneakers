from django.db import models
import random
import string
from datetime import datetime, timedelta


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
    model = models.CharField(max_length=100, blank=False)
    brand = models.CharField(max_length=100, blank=False)
    color = models.CharField(max_length=100, blank=False)
    gender = models.CharField(max_length=10, blank=False)
    release_year = models.CharField(max_length=4, blank=False)
    size = models.CharField(max_length= 4, blank=False)
    photos = models.FileField(default="default.jpg")
    condition = models.CharField(max_length=20, blank=False)
    starting_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False)
    created_at = models.DateTimeField(
        default=datetime.now() + timedelta(hours=24))
    owner = models.CharField(max_length=100, default='')
    current_bidder = models.CharField(max_length=100, default='')
