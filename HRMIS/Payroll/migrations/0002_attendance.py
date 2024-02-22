# Generated by Django 5.0.2 on 2024-02-16 01:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentication', '0006_alter_profile_profile_picture'),
        ('Payroll', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField()),
                ('time_in', models.TimeField()),
                ('time_out', models.TimeField()),
                ('remark', models.CharField(choices=[('FULL', 'Full Day'), ('HALF', 'Half Day'), ('ABSENT', 'Absent')], max_length=6)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Authentication.user')),
                ('excel_file', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Payroll.cleanseddata')),
            ],
        ),
    ]
