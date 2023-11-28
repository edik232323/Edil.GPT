from django.shortcuts import render
from django.http import HttpResponse
from .models import EdilModel
from django.contrib.auth.forms import UserCreationForm

def index(request):
    data = EdilModel.objects.all()
    return render(request, 'main/appedilgpt.html', {'data': data})

def SignUpPage(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            print(form.errors)


    context = {'form':form}
    return render(request, 'main/SignUpPage.html', context)
