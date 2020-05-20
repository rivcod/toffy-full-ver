import sqlite3
import django
import os
import sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from tfgame.models import Tfgame

hi = Tfgame.objects.all()
for row in hi.values_list():
    lastNum = row[1]
    print(lastNum)

text = Tfgame.objects.raw("SELECT Tfgame.* FROM Tfgame LEFT OUTER JOIN Tftag ON (Tfgame.num = Tftag.num))")
print(text)