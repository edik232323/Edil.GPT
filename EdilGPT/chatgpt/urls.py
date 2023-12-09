from django.urls import path
from .views import chatgptAudioView

urlpatterns = [
    path('audio/', chatgptAudioView.as_view(), name='Sign'),
]
