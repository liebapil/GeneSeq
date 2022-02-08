from dataclasses import field
from rest_framework import serializers
from .models import User, Gene, Mutation

# sterlizer between user and gene 
class UserSerializer(serializers.HyperlinkedModelSerializer):

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name='user_detail'
    )

    class Meta:
        model = User
        fields = ('id', 'user_name', 'password', 'user_url',)

# serializer between gene and mutation 
class GeneSerializer(serializers.HyperlinkedModelSerializer):
    mutation = serializers.HyperlinkedRelatedField(
        view_name='mutation_detail',
        many=True,
        read_only=True
    )

    gene_url = serializers.ModelSerializer.serializer_url_field(
        view_name='gene_detail'
    )
    

    class Meta:
        model = Gene
        fields = ('id', 'gene_name', 'sequence', 'mutation','gene_url', )


#serializer between mutation and gene 
class MutationSerializer(serializers.HyperlinkedModelSerializer):
    gene = serializers.HyperlinkedRelatedField(
        view_name='gene_detail',
        read_only=True
    )

    gene_id = serializers.PrimaryKeyRelatedField(
        queryset=Gene.objects.all(),
        source='gene'
    )

    class Meta:
        model = Mutation
        fields = ('id','mutation', 'hphob_hphil', 'protonate', 'gene','gene_id',)