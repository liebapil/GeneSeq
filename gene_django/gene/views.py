from rest_framework import generics
from .serializers import UserSerializer, GeneSerializer
from .models import User, Gene

# Create your views here.
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GeneList(generics.ListCreateAPIView):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

class GeneDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer