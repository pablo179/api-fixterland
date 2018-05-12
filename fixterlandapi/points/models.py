from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Character(models.Model):
    name_character= models.CharField(max_length=100)
    mele= models.IntegerField()
    magic=models.IntegerField()
    earth= models.IntegerField()
    wind= models.IntegerField()
    wather= models.IntegerField()
    fire= models.IntegerField()
    hp= models.IntegerField()
    mn=models.IntegerField()

    def __str__(self):
        return self.name_character

class Item(models.Model):
    name = models.CharField(max_length=100)
    lvl=models.IntegerField()
    mele= models.IntegerField()
    magic=models.IntegerField()
    earth= models.IntegerField()
    wind= models.IntegerField()
    wather= models.IntegerField()
    fire= models.IntegerField()

    def __str__(self):
        return self.name

class Boss(models.Model):
    name=models.CharField(max_length=100)
    hp=models.IntegerField()
    mele= models.IntegerField()
    magic=models.IntegerField()
    lvl=models.IntegerField()
    earth= models.IntegerField()
    wind= models.IntegerField()
    wather= models.IntegerField()
    fire= models.IntegerField()

    def __str__(self):
        return self.name

class Stage(models.Model):
    name= models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
    name= models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    email= models.EmailField()
    title=models.CharField(max_length=200, blank=True, null=True)
    type_character= models.ForeignKey(Character, on_delete=models.CASCADE , blank=True, null=True)
    hp= models.IntegerField()
    mn= models.IntegerField()
    mele= models.IntegerField()
    magic=models.IntegerField()
    lvl=models.IntegerField()
    exp=models.FloatField()
    skin=models.ImageField(upload_to='skin_img',blank=True,null=True)
    item=models.ManyToManyField(Item,blank=True,null=True)
    boss=models.ManyToManyField(Boss,blank=True, null=True)

    def __str__(self):
        return self.title

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
	    instance.profile.save()