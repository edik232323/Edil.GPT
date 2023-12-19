from django.contrib import admin
from .models import EdilModel, UserProfile, LoginEvent

admin.site.register(UserProfile)
admin.site.register(LoginEvent)
admin.site.register(EdilModel)
