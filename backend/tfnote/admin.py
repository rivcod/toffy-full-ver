from django.contrib import admin
from .models import Tfnote

# Register your models here.


class TfnoteAdmin(admin.ModelAdmin):
    list_display = ('writer', 'text', 'date')


admin.site.register(Tfnote, TfnoteAdmin)
