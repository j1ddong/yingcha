# Generated by Django 3.2.12 on 2022-05-19 12:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_auto_20220519_2131'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='country',
        ),
    ]
