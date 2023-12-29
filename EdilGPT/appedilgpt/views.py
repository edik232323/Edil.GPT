from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import EdilModel, UserProfile
from django.contrib.auth.forms import UserCreationForm
from rest_framework import generics, permissions
from .serializers import EdilModelSerializer, LoginSerializer, LogOutSerializer, UserProfileSerializer, CustomRegisterSerializer
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class UserProfileDetail(RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user_profile = UserProfile.objects.filter(user=self.request.user).first()

        if not user_profile:
            raise Http404("UserProfile does not exist")

        return user_profile

def index(request):
    data = EdilModel.objects.all()
    return render(request, 'main/appedilgpt.html', {'data': data})

class SignUpPage(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CustomRegisterSerializer

class LogOutView(generics.GenericAPIView):
    serializer_class = LogOutSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class LoginAPI(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = authenticate(request, username=serializer.validated_data['username'], password=serializer.validated_data['password'])

        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response(data={
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                }
            })
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED, data={'error': 'Username or password is incorrect!'})
class EdilModelListCreateView(generics.ListCreateAPIView):
    queryset = EdilModel.objects.all()
    serializer_class = EdilModelSerializer

class EdilModelDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EdilModel.objects.all()
    serializer_class = EdilModelSerializer
