# Generated by Django 3.2.12 on 2022-05-20 03:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('communities', '0002_auto_20220520_1247'),
    ]

    operations = [
        migrations.RenameField(
            model_name='food',
            old_name='food_taste',
            new_name='taste',
        ),
    ]
