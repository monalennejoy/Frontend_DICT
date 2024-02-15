# Generated by Django 5.0.2 on 2024-02-14 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CleansedData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file_name', models.CharField(max_length=255)),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
                ('file_binary', models.BinaryField()),
            ],
        ),
    ]
