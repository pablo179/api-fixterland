# Generated by Django 2.0.5 on 2018-05-12 15:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('points', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('hp', models.IntegerField()),
                ('mn', models.IntegerField()),
                ('mele', models.IntegerField()),
                ('magic', models.IntegerField()),
                ('lvl', models.IntegerField()),
                ('exp', models.FloatField()),
                ('skin', models.ImageField(blank=True, null=True, upload_to='skin_img')),
                ('boss', models.ManyToManyField(blank=True, null=True, to='points.Boss')),
                ('item', models.ManyToManyField(blank=True, null=True, to='points.Item')),
                ('name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('type_character', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='points.Character')),
            ],
        ),
    ]