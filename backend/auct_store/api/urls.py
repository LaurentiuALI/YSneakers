from django.urls import path
from . import views 

urlpatterns = [
    path("home/", views.ProductView.as_view()),
    path("", views.ProductView.as_view()),
    path("products/", views.ProductList.as_view())

]
