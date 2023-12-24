from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from .models import UserProfile, LoginEvent
from allauth.account.signals import user_logged_in
from .utils import get_client_ip
from django.dispatch import receiver

User = get_user_model()

@receiver(post_save, sender=UserProfile)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

@receiver(user_logged_in)
def handle_user_login(sender, request, user, **kwargs):
    LoginEvent.objects.create(user=user, ip_address=get_client_ip(request))
