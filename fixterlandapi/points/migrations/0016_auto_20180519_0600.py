# Generated by Django 2.0.5 on 2018-05-19 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0015_boss_skin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='exp',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='profile',
            name='hp_act',
            field=models.IntegerField(default=50),
        ),
        migrations.AlterField(
            model_name='profile',
            name='hp_tot',
            field=models.IntegerField(default=50),
        ),
        migrations.AlterField(
            model_name='profile',
            name='lvl',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='profile',
            name='magic',
            field=models.IntegerField(default=5),
        ),
        migrations.AlterField(
            model_name='profile',
            name='mele',
            field=models.IntegerField(default=5),
        ),
        migrations.AlterField(
            model_name='profile',
            name='mn_act',
            field=models.IntegerField(default=25),
        ),
        migrations.AlterField(
            model_name='profile',
            name='mn_tot',
            field=models.IntegerField(default=25),
        ),
    ]
