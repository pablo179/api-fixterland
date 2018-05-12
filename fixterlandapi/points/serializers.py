from .models import *
from django.contrib.auth.models import User
from rest_framework import serializers


class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model=Character
        fields='__all__'

class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model=Item
        fields='__all__'

class BossSerializer(serializers.ModelSerializer):

    class Meta:
        model=Boss
        fields='__all__'

class StageSerializer(serializers.ModelSerializer):

    class Meta:
        model=Stage
        fields='__all__'

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
	profile = ProfileSerializer(many=False, read_only=True)
	password = serializers.CharField(write_only=True)
	class Meta:
		model = User
		fields = ['username', 'email', 'id', 'password', 'profile']
	def create(self, validated_data):
		password = validated_data.pop('password')
		user = User.objects.create(**validated_data)
		user.set_password(password)
		user.save()

		return user
