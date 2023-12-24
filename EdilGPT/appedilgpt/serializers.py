from django.contrib.auth.models import User
from rest_framework import serializers, generics
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from .models import EdilModel, UserProfile
from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.db.models.signals import post_save


class EdilModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EdilModel
        fields = '__all__'

class LogOutSerializer(serializers.Serializer):
    refresh = serializers.CharField(min_length=2)
    default_error_messages = {
        'bad_token': ('Token is invalid or expired',)}

    def validate(self, attrs):
        self.token = attrs['refresh']
        return super().validate(attrs)

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)


User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile  # Use the custom user model
        fields = ('username', 'password', 'email')


def create_user_profile(self, instance, validated_data):
    UserProfile.objects.create(user=instance)


@receiver(post_save, sender=UserProfile)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()