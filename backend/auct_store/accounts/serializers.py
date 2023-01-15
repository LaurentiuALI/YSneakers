from .models import UserAccount
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserCreateSerliazer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('id', 'email', 'name', 'address', 'phone_number', 'password')


class UpdateUserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields = ('id', 'email', 'name', 'address', 'phone_number', 'password')
