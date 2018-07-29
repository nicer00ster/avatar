from django.conf.urls import include, url
from rest_framework import routers

from .api import NoteViewSet, RegistrationAPI, LoginAPI, UserAPI, AvatarViewSet

router = routers.DefaultRouter()
router.register('notes', NoteViewSet, 'notes')
router.register('avatar', AvatarViewSet, 'avatar')

urlpatterns = [
    url('^', include(router.urls)),
    url('^auth/register/$', RegistrationAPI.as_view()),
    url('^auth/login/$', LoginAPI.as_view()),
    url('^auth/user/$', UserAPI.as_view()),
]
