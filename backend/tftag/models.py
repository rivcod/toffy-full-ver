from django.db import models
from tfgame.models import Tfgame

# Create your models here.

class Tftag(models.Model):
   
    num = models.ForeignKey(Tfgame, on_delete=models.CASCADE)

    action = models.CharField(max_length=25,
                              verbose_name='action',
                              blank=True)
    arcade = models.CharField(max_length=25,
                              verbose_name='arcade',
                              blank=True)
    indie = models.CharField(max_length=25,
                              verbose_name='indie',
                              blank=True)
    casual = models.CharField(max_length=25,
                              verbose_name='casual',
                              blank=True)
    adventure = models.CharField(max_length=25,
                              verbose_name='adventure',
                              blank=True)
    simulation = models.CharField(max_length=25,
                              verbose_name='simulation',
                              blank=True)
    strategy = models.CharField(max_length=25,
                              verbose_name='strategy',
                              blank=True)
    roleplay = models.CharField(max_length=25,
                              verbose_name='roleplay',
                              blank=True)                                           
    sports = models.CharField(max_length=25,
                              verbose_name='sports',
                              blank=True)
    horror = models.CharField(max_length=25,
                              verbose_name='horror',
                              blank=True)
    racing = models.CharField(max_length=25,
                              verbose_name='racing',
                              blank=True)
    pixel = models.CharField(max_length=25,
                              verbose_name='pixel',
                              blank=True)
    puzzle = models.CharField(max_length=25,
                              verbose_name='puzzle',
                              blank=True)
    story = models.CharField(max_length=25,
                              verbose_name='story',
                              blank=True)
    fantasy = models.CharField(max_length=25,
                              verbose_name='fantasy',
                              blank=True)
    shooting = models.CharField(max_length=25,
                              verbose_name='shooting',
                              blank=True)
    survival = models.CharField(max_length=25,
                              verbose_name='survival',
                              blank=True)
    fps = models.CharField(max_length=25,
                              verbose_name='fps',
                              blank=True)
    explorer = models.CharField(max_length=25,
                              verbose_name='explorer',
                              blank=True)
    cute = models.CharField(max_length=25,
                              verbose_name='cute',
                              blank=True)
    movie = models.CharField(max_length=25,
                              verbose_name='movie',
                              blank=True)
    zombie = models.CharField(max_length=25,
                              verbose_name='zombie',
                              blank=True)
    dark = models.CharField(max_length=25,
                              verbose_name='dark',
                              blank=True)
    mystery = models.CharField(max_length=25,
                              verbose_name='mystery',
                              blank=True)
    structure = models.CharField(max_length=25,
                              verbose_name='structure',
                              blank=True)
    management = models.CharField(max_length=25,
                              verbose_name='management',
                              blank=True)
    act_adventure = models.CharField(max_length=25,
                              verbose_name='act_adventure',
                              blank=True)
    act_roleplay = models.CharField(max_length=25,
                              verbose_name='act_roleplay',
                              blank=True)
    war = models.CharField(max_length=25,
                              verbose_name='war',
                              blank=True)
    music = models.CharField(max_length=25,
                              verbose_name='music',
                              blank=True)
    rom_simulation = models.CharField(max_length=25,
                              verbose_name='rom_simulation',
                              blank=True)
    post_apocalypse = models.CharField(max_length=25,
                              verbose_name='post_apocalypse',
                              blank=True)                                           
    addictive = models.CharField(max_length=25,
                              verbose_name='addictive',
                              blank=True)
    beautiful = models.CharField(max_length=25,
                              verbose_name='beautiful',
                              blank=True)
    romance = models.CharField(max_length=25,
                              verbose_name='romance',
                              blank=True)
    wizard = models.CharField(max_length=25,
                              verbose_name='wizard',
                              blank=True)
    cards = models.CharField(max_length=25,
                              verbose_name='cards',
                              blank=True)
    worldwar = models.CharField(max_length=25,
                              verbose_name='worldwar',
                              blank=True)
    racing = models.CharField(max_length=25,
                              verbose_name='racing',
                              blank=True)
    thriller = models.CharField(max_length=25,
                              verbose_name='thriller',
                              blank=True)
    flight = models.CharField(max_length=25,
                              verbose_name='flight',
                              blank=True)
    rhythm = models.CharField(max_length=25,
                              verbose_name='rhythm',
                              blank=True)
    philosophy = models.CharField(max_length=25,
                              verbose_name='philosophy',
                              blank=True)
    timeslip = models.CharField(max_length=25,
                              verbose_name='timeslip',
                              blank=True)
    cat = models.CharField(max_length=25,
                              verbose_name='cat',
                              blank=True)
    dog = models.CharField(max_length=25,
                              verbose_name='dog',
                              blank=True)
    soccer = models.CharField(max_length=25,
                              verbose_name='soccer',
                              blank=True)
    fishing = models.CharField(max_length=25,
                              verbose_name='fishing',
                              blank=True)
    bike = models.CharField(max_length=25,
                              verbose_name='bike',
                              blank=True)
    golf = models.CharField(max_length=25,
                              verbose_name='golf',
                              blank=True)
    pocketball = models.CharField(max_length=25,
                              verbose_name='pocketball',
                              blank=True)

    class Meta:
        db_table = 'toffy_tag'
        managed = False
        verbose_name = '태그'
        verbose_name_plural = '태그'