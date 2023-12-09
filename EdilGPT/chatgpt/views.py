from .serializers import chatgptAudioSerializer
from rest_framework.views import APIView

from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse
# Create your views here.

class chatgptAudioView(APIView):
    serializer_class = chatgptAudioSerializer
    def post(self, request, *args, **kwargs):
        serializer = chatgptAudioSerializer(data=request.data)

        return Response({"answer" : "true"}, status=status.HTTP_200_OK)
