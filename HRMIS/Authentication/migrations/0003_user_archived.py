# Generated by Django 5.0.1 on 2024-01-31 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0002_rename_customuser_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='archived',
            field=models.BooleanField(default=False),
        ),
    ]