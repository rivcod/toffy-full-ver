from django.db import models

# Create your models here.

class Tfgame(models.Model):
    num = models.CharField(max_length=30,
                              verbose_name='num',
                              default='SOME STRING')  
    title = models.CharField(max_length=50,
                             verbose_name='title')
    price = models.CharField(max_length=30,
                              verbose_name='price')
    href = models.CharField(max_length=30,
                              verbose_name='href')                                                  
    image = models.CharField(max_length=100,
                              verbose_name='image',
                              default='SOME STRING')
    rank = models.CharField(max_length=30,
                              verbose_name='rank',
                              default='SOME STRING')                                                    

    class Meta:
        db_table = 'toffy_game'
        verbose_name = '게임'
        verbose_name_plural = '게임'