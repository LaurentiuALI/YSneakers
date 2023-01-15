from .models import UserAccount
from rest_framework import viewsets
from .serializers import UserSerializer, UpdateUserSerializer
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response

User = get_user_model()


def get_all_users():
    return UserAccount.objects.all()


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer


# @api_view(["PATCH"])
# def update_user(request, id, format=None):
#     try:
#         user = UserAccount.objects.get(pk=id)
#         print(user)
#     except user.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)


# class UpdateUserView(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UpdateUserSerializer
#     http_method_names = ['patch']

#     def get_object(self):
#         return self.request.user
