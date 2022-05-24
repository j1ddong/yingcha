# Generated by Django 3.2.12 on 2022-05-24 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_auto_20220520_1655'),
        ('communities', '0005_rename_tastee_algo_taste_taste_algo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taste',
            name='taste_algo',
        ),
        migrations.AddField(
            model_name='taste',
            name='genres',
            field=models.ManyToManyField(related_name='tastes', to='movies.Genre'),
        ),
        migrations.DeleteModel(
            name='Algo',
        ),
    ]