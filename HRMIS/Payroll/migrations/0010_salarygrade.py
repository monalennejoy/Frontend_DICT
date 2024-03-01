# Generated by Django 5.0.2 on 2024-02-29 03:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Payroll', '0009_attendance_minutes_late'),
    ]

    operations = [
        migrations.CreateModel(
            name='SalaryGrade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.CharField(max_length=2, unique=True)),
                ('salary', models.FloatField()),
            ],
        ),
    ]