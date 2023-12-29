from django.contrib.auth.models import User
from rest_framework import serializers, generics
from rest_framework.fields import empty
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from .models import EdilModel, UserProfile
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('user', 'first_name', 'last_name', 'birthdate', 'bio', 'profile_image')
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

class CustomRegisterSerializer(RegisterSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'email')

    def __init__(self, instance=None, data=empty, **kwargs):
        super().__init__(instance, data, **kwargs)
        self.request = None

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
        )

        user.set_password(validated_data['password'])
        user.save()

        setup_user_email(self.request, user, [])

        # Send confirmation email
        self.send_email_confirmation(user, self.context['request'])

        return user

    def send_email_confirmation(self, user, request):
        adapter = get_adapter()
        confirmation = adapter.new_email_confirmation(request, user)
        confirmation.send(request, signup=True)

    def validate(self, data):
        email = data.get('email')

        # Check if the email is unique
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError("This email address is already in use.")

        return data

    def save(self, *args, **kwargs):
        # Ensure 'request' is extracted from 'kwargs'
        request = kwargs.get('request', None)

        # Call the 'create' method with the extracted 'request'
        return self.create(self.validated_data)
