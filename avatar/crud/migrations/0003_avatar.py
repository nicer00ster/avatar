# Generated by Django 2.0.7 on 2018-07-29 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0002_note_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Avatar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]
