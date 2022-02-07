from dataclasses import field
from rest_framework import serializers
from .models import User, Gene, Mutation

# sterlizer between user and gene 
class UserSerializer(serializers.HyperlinkedModelSerializer):
    gene = serializers.HyperlinkedRelatedField(
        view_name='gene_detail',
        many=True,
        read_only=True
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name='user_detail'
    )

    class Meta:
        model = User
        field = ('id', 'user_name', 'password', 'gene')

# serializer between gene and mutation 
class GeneSerializer(serializers.HyperlinkedModelSerializer):
    mutation = serializers.HyperlinkedRelatedField(
        view_name='mutation_detail',
        many=True,
        read_only=True
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name='gene_detail'
    )

    class Meta:
        model = Gene
        field = ('id', 'user', 'gene_name', 'sequence', 'mutation')


#serializer between mutation and gene 
class MutationSerializer(serializers.HyperlinkedModelSerializer):
    gene = serializers.HyperlinkedRelatedField(
        view_name='gene_detail',
        read_only=True
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name='mutation_detail'
    )

    class Meta:
        model = Mutation
        field = ('id', 'gene', 'mutation', 'hphob_hphil', 'protonate', 'gene')