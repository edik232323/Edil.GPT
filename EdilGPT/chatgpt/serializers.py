from django.contrib.auth.models import User
from rest_framework import serializers, generics


class chatgptAudioSerializer(serializers.Serializer):
    text = serializers.CharField(write_only=True)
