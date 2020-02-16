from django.contrib import admin
from .models import Tfuser

# Register your models here.

class TfuserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'password', 'regdate')
    # 시간이 한국시간으로 표기되지 않는 것 수정 필요
    
admin.site.register(Tfuser, TfuserAdmin)