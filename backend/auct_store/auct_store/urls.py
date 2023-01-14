from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    # path("admin/", admin.site.urls),
    path("api/v1/product/", include("api.urls")),
    path("auth/", include('accounts.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]
