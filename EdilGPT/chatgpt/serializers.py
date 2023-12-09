from django.contrib.auth.models import User
from rest_framework import serializers, generics


class chatgptAudioSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['text']
        extra_kwargs = {
            'text': {'write_only': True}
        }