
from django import forms
from django.contrib.auth.forms import UserChangeForm
from .models import UserProfile

class UserProfileForm(UserChangeForm):
    class Meta:
        model = UserProfile
        fields = ('bio', )