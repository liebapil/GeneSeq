from django.contrib import admin
from .models import User, Gene, Mutation

# Register your models here.
admin.site.register(User)
admin.site.register(Gene)
admin.site.register(Mutation)
