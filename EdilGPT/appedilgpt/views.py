from django.shortcuts import render
from django.http import HttpResponse
from .models import EdilModel

def index(request):
    data = EdilModel.objects.all()
    return render(request, 'main/appedilgpt.html', {'data': data})
