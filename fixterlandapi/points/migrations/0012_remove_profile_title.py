# Generated by Django 2.0.5 on 2018-05-18 21:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0011_auto_20180517_2120'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='title',
        ),
    ]
