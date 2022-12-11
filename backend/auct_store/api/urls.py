from django.urls import path
from . import views 

urlpatterns = [
    path("products/<int:id>/delete/", views.ProductDestroy.as_view()),
    path("products/new/", views.ProductView.as_view()),
    path("products/", views.ProductList.as_view()),

]
