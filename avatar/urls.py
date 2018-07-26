from django.contrib import admin
from django.conf.urls import url, include
from django.views import generic
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^$', generic.TemplateView.as_view(template_name='index.html')),
    url(r'login/', generic.TemplateView.as_view(template_name='index.html')),
    url(r'admin/', admin.site.urls),
    url(r'^api/v1/', include(router.urls)),
    url(r'api-', include('rest_framework.urls')),
]
