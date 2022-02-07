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
        fields = ('id', 'user_name', 'password', 'gene', 'user_url',)

# serializer between gene and mutation 
class GeneSerializer(serializers.HyperlinkedModelSerializer):
    mutations = serializers.HyperlinkedRelatedField(
        view_name='mutation_detail',
        many=True,
        read_only=True
    )

    gene_url = serializers.ModelSerializer.serializer_url_field(
        view_name='gene_detail'
    )

    users = serializers.HyperlinkedRelatedField(
        view_name='user_detail',
        read_only=True
    )
    
    
    class Meta:
        model = Gene
        fields = ('id', 'user', 'gene_name', 'sequence', 'mutations','users','gene_url', )


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
        fields = ('id', 'gene', 'mutation', 'hphob_hphil', 'protonate', 'gene','gene_id',)