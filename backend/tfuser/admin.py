from django.contrib import admin
from .models import Tfuser

# Register your models here.

class TfuserAdmin(admin.ModelAdmin):
    list_display = ('email', )

admin.site.register(Tfuser, TfuserAdmin)