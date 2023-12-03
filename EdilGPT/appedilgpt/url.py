from django.urls import path
from .views import index, SignUpPage, EdilModelListCreateView, EdilModelDetailView, LoginAPI, LogOutView

urlpatterns = [
    path('', index, name='appedilgpt'),
    path('register/', SignUpPage.as_view(), name='Sign'),
    path('edilmodels/', EdilModelListCreateView.as_view(), name='edilmodel-list-create'),
    path('edilmodels/<int:pk>/', EdilModelDetailView.as_view(), name='edilmodel-detail'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', LogOutView.as_view(), name='logout')
]
