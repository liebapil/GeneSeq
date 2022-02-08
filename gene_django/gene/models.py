from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=10)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.user_name 

class Gene(models.Model):
    gene_name = models.TextField(default='no gene')
    sequence_one = models.TextField(default='no sequence')
    sequence_two = models.TextField(default='no sequence')

    def __str__(self):
        return self.gene_name

class Mutation(models.Model):
    gene = models.ForeignKey(Gene, on_delete = models.CASCADE, related_name='mutation' )
    mutation = models.TextField(default='no mutation')
    hphob_hphil = models.TextField(default='no mutation')
    protonate = models.TextField(default='no mutation')

    def __str__(self):
        return self.mutation
