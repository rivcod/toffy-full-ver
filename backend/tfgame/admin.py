from django.contrib import admin
from .models import Tfgame

# Register your models here.


class TfgameAdmin(admin.ModelAdmin):
    list_display = ('rank', 'id', 'title', 'price', 'tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'href', 'image'
                    )


admin.site.register(Tfgame, TfgameAdmin)
