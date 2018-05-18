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


class UserSerializer(serializers.ModelSerializer):
	password = serializers.CharField(write_only=True)
	class Meta:
		model = User
		fields = ['username', 'email', 'id', 'password']
	def create(self, validated_data):
		password = validated_data.pop('password')
		user = User.objects.create(**validated_data)
		user.set_password(password)
		user.save()

		return user

class ProfileSerializer(serializers.ModelSerializer):
    name=UserSerializer(many=False,read_only=True)
    type_character=CharacterSerializer(many=False, read_only=True)
    type_character_id = serializers.PrimaryKeyRelatedField(source="type_character",queryset=Character.objects.all()
    , many=False, read_only=False,write_only=True)
    item = ItemSerializer(many=True, read_only=True)
    item_id=serializers.PrimaryKeyRelatedField(source="item",queryset=Item.objects.all(),
    many=True,read_only=False, write_only=True)
    boss= BossSerializer(many=True, read_only=True)
    boss_id=serializers.PrimaryKeyRelatedField(source="boss",queryset=Boss.objects.all(),
    many=True,read_only=False,write_only=True)
    class Meta:
        model = Profile
        fields = '__all__'
