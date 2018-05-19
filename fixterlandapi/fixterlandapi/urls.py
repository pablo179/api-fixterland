from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url

from django.conf import settings
from django.views.static import serve
from rest_framework import routers
from points.views import *
from rest_framework.authtoken import views

router = routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('characters',CharacterViewSet)
router.register('items',ItemViewSet)
router.register('bosses',BossViewSet)
router.register('stages',StageViewSet)
router.register('profiles', ProfileViewSet)
router.register('monsters',MonstersViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('my_user/', MyUser.as_view()),
    path('', include(router.urls)), 
    url(
        regex=r'^media/(?P<path>.*)$',
        view=serve,
        kwargs={'document_root': settings.MEDIA_ROOT}
    ),
]
