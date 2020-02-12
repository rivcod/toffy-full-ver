from django.db import models

# Create your models here.

class Tfgame(models.Model):
    title = models.CharField(max_length=50,
                             verbose_name='title')
    company = models.CharField(max_length=30,
                             verbose_name='company')
    price = models.CharField(max_length=30,
                              verbose_name='price')
    os = models.CharField(max_length=30,
                              verbose_name='os')                                                  
    release = models.CharField(max_length=50,
                              verbose_name='release')

    class Meta:
        db_table = 'toffy_game'
        verbose_name = '게임'
        verbose_name_plural = '게임'