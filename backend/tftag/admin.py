from django.contrib import admin
from .models import Tftag

# Register your models here.

class TftagAdmin(admin.ModelAdmin):
    list_display = (
        'num', 'action', 'arcade', 'indie', 'casual', 'adventure', 'simulation', 'strategy', 'roleplay',
    'sports', 'horror', 'racing', 'pixel', 'puzzle', 'story', 'fantasy', 'shooting', 'survival', 'fps',
    'explorer', 'cute', 'movie', 'zombie', 'dark', 'mystery', 'structure', 'management', 'act_adventure',
    'act_roleplay', 'war', 'music', 'rom_simulation', 'post_apocalypse', 'addictive', 'beautiful', 'romance',
    'wizard', 'cards', 'worldwar', 'racing', 'thriller', 'flight', 'rhythm', 'philosophy', 'timeslip',
    'cat', 'dog', 'soccer', 'fishing', 'bike', 'golf', 'pocketball')

admin.site.register(Tftag, TftagAdmin)