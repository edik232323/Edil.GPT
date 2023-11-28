from django.urls import path
from .views import index, SignUpPage

urlpatterns = [
    path('', index, name='appedilgpt'),
    path('Sign', SignUpPage, name='Sign'),
]
