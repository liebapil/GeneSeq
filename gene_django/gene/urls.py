from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('user/', views.UserList.as_view(), name='user_list'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('gene/', views.GeneList.as_view(), name='gene_list'),
    path('gene/<int:pk>', views.GeneDetail.as_view(), name='gene_detail'),
]