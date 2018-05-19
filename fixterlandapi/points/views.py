from django.shortcuts import render
from django.contrib.auth.models import User
from .serializers import *
from rest_framework import viewsets
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
class MyUser(APIView):
    def get(self, request, format=None):
        my_user = Profile.objects.all().get(id=request.user.userprofile.id)
        serializer = ProfileSerializer(my_user)
        return Response(serializer.data)
    def put(self, request, format=None):
        my_user = Profile.objects.all().get(id=request.user.userprofile.id)
        serializer = ProfileSerializer(my_user)
        return Response(serializer.data)
        
class CharacterViewSet(viewsets.ModelViewSet):
    queryset=Character.objects.all()
    serializer_class=CharacterSerializer

class MonstersViewSet(viewsets.ModelViewSet):
   queryset=Monsters.objects.all()
   serializer_class=MonstersSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset=Item.objects.all()
    serializer_class=ItemSerializer

class BossViewSet(viewsets.ModelViewSet):
    queryset=Boss.objects.all()
    serializer_class=BossSerializer

class StageViewSet(viewsets.ModelViewSet):
    queryset=Stage.objects.all()
    serializer_class=StageSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerializer