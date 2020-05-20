from django.contrib import admin
from .models import Tftag

# Register your models here.

class TftagAdmin(admin.ModelAdmin):
    list_display = (
      )

admin.site.register(Tftag, TftagAdmin)