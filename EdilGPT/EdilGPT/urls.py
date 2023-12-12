
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/', include('appedilgpt.url')),
    path('api/v1/gpt/', include('chatgpt.urls')),
]
