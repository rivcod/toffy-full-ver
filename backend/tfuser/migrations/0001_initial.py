# Generated by Django 3.0.3 on 2020-02-12 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tfuser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, verbose_name='email')),
                ('username', models.CharField(max_length=10, verbose_name='username')),
                ('password', models.CharField(max_length=4, verbose_name='password')),
                ('regdate', models.DateTimeField(auto_now_add=True, verbose_name='regdate')),
            ],
            options={
                'verbose_name': '유저',
                'verbose_name_plural': '유저',
                'db_table': 'toffy_user',
            },
        ),
    ]
