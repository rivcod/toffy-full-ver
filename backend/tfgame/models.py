from django.db import models

# Create your models here.

class Tfgame(models.Model):
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
    tag1 = models.CharField(max_length=25,
                              verbose_name='tag1',
                              default='SOME STRING')
    tag2 = models.CharField(max_length=25,
                              verbose_name='tag2',
                              default='SOME STRING')
    tag3 = models.CharField(max_length=25,
                              verbose_name='tag3',
                              default='SOME STRING')                                                    

    class Meta:
        db_table = 'toffy_game'
        verbose_name = '게임'
        verbose_name_plural = '게임'