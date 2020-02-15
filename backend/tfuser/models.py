from django.db import models

# Create your models here.

class Tfuser(models.Model):
    objects = models.Manager()
    # Tfuser.DoesNotExists: 오류 해결을 위해 추가
    email = models.EmailField(verbose_name='email')
    username = models.CharField(max_length=10, verbose_name='username')
    password = models.CharField(max_length=4, verbose_name='password')
    regdate = models.DateTimeField(auto_now_add=True, verbose_name='regdate')

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'toffy_user'
        verbose_name = '유저'
        verbose_name_plural = '유저'