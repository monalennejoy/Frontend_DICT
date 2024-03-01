# Generated by Django 5.0.2 on 2024-02-29 07:56

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Payroll', '0010_salarygrade'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payslip',
            name='absent_attendance_count',
        ),
        migrations.RemoveField(
            model_name='payslip',
            name='full_attendance_count',
        ),
        migrations.RemoveField(
            model_name='payslip',
            name='half_attendance_count',
        ),
        migrations.RemoveField(
            model_name='payslip',
            name='monthly_salary',
        ),
        migrations.AddField(
            model_name='payslip',
            name='absent_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='absent_deduction',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='basic_salary',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='current_date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='payslip',
            name='daily_salary',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='gross_pay',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='late_attendance_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='late_deduction',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='net_before_tax',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='number_of_days',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='pre_deduction',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='premium',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='tax_2_percent',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='tax_3_percent',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='total_deduction',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='total_late_minutes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='payslip',
            name='total_net_pay',
            field=models.FloatField(default=0.0),
        ),
    ]