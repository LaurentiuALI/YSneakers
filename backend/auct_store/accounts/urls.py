from django.urls import path
from .views import UserViewSet

urlpatterns = [
    path('allusers/', UserViewSet.as_view({'get': 'list'})),
]
