# Generated by Django 2.0.5 on 2018-05-17 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0009_character_details'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='email',
        ),
        migrations.AddField(
            model_name='profile',
            name='skin',
            field=models.ImageField(blank=True, null=True, upload_to='skin_img'),
        ),
    ]
