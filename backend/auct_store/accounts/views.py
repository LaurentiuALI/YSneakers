from .models import UserAccount
from rest_framework import viewsets
from .serializers import UserSerializer


def get_all_users():
    return UserAccount.objects.all()


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializer
