from django.contrib import admin
from .models import Tfgame

# Register your models here.

class TfgameAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'href', 'image', 'rank', 'tag1', 'tag2', 'tag3')

admin.site.register(Tfgame, TfgameAdmin)