from django.contrib import admin
from .models import Tfgame

# Register your models here.

class TfgameAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'price', 'os', 'release', 'image', 'rank')

admin.site.register(Tfgame, TfgameAdmin)