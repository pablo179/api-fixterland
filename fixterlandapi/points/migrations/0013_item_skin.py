# Generated by Django 2.0.5 on 2018-05-18 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0012_remove_profile_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='skin',
            field=models.ImageField(blank=True, null=True, upload_to='item_img'),
        ),
    ]
