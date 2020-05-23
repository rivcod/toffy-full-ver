from django.db import models
from django.utils import timezone

# Create your models here.


class Tfnote(models.Model):
    writer = models.CharField(max_length=20, verbose_name='writer')
    text = models.CharField(max_length=200, verbose_name='text')
    date = models.DateTimeField(default=timezone.now, verbose_name='date')

    # class Meta:
    # db_table = 'toffy_note'
    # verbose_name = '노트'
    # verbose_name_plural = '노트'
