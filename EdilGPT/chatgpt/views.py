from .serializers import chatgptAudioSerializer
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status, serializers
from django.http import HttpResponse
from openai import OpenAI
# Create your views here.

client = OpenAI(
    api_key="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",
)

class chatgptAudioView(APIView):
    serializer_class = chatgptAudioSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = chatgptAudioSerializer(data=request.data)

        if serializer.is_valid():
            input_text = serializer.validated_data['text']

            chat_compelepation = client.chat.completions.create(
                model="gpt-3.5-turbo-1106",
                messages=[
                    {
                        "role": "user",
                        "content": input_text,
                    }
                ],
                temperature=1,
                max_tokens=200
            )

            responce_data = {"text": chat_compelepation.choices[0].message.content}
            return Response(responce_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
