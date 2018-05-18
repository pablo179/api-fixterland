# Generated by Django 2.0.5 on 2018-05-15 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0002_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='exp',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='hp',
            field=models.IntegerField(default=25),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lvl',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='magic',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='mele',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='mn',
            field=models.IntegerField(default=10),
        ),
    ]