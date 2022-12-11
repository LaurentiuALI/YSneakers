from django.urls import path
from . import views 
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
   path("", views.product_list),
   path("<int:id>", views.product_detail)
]

urlpatterns = format_suffix_patterns(urlpatterns)