from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Monsters(models.Model):
    name=models.TextField()
    skin=models.ImageField(upload_to='skin_img',blank=True,null=True)
    hp_act=models.IntegerField(default=15)
    hp_tot=models.IntegerField(default=15)
    def __str__(self):
        return self.name
    
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
    skin=models.ImageField(upload_to='skin_img',blank=True,null=True)
    details=models.TextField(default="lorem")

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
    skin= models.ImageField(upload_to='item_img',blank=True,null=True)

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
    skin=models.ImageField(upload_to='skin_img',blank=True,null=True)

    def __str__(self):
        return self.name

class Stage(models.Model):
    name= models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
    name= models.OneToOneField(User, related_name='userprofile', on_delete=models.CASCADE, blank=True, null=True)
    type_character= models.ForeignKey(Character, on_delete=models.CASCADE , blank=True, null=True)
    hp_tot= models.IntegerField(default=50)
    hp_act= models.IntegerField(default=50)
    mn_tot= models.IntegerField(default=25)
    mn_act= models.IntegerField(default=25)
    mele= models.IntegerField(default=5)
    magic=models.IntegerField(default=5)
    lvl=models.IntegerField(default=0)
    exp=models.FloatField(default=0)
    item=models.ManyToManyField(Item,blank=True,null=True)
    boss=models.ManyToManyField(Boss,blank=True, null=True)
    first_time=models.BooleanField(default=True)

    def __str__(self):
        return  '{}'.format(self.name)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(name=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
	    instance.userprofile.save()
