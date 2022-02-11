from rest_framework import generics
from .serializers import MutationSerializer, UserSerializer, GeneSerializer
from .models import Mutation, User, Gene

# user 
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

#gene
class GeneList(generics.ListCreateAPIView):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

class GeneDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

#mutation
class MutationList(generics.ListCreateAPIView):
    queryset = Mutation.objects.all()
    serializer_class = MutationSerializer

class MutationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Mutation.objects.all()
    serializer_class = MutationSerializer