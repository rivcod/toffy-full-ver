## DB 데이터 삭제 py

import sqlite3
import django
import os
import sys
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from tfgame.models import Tfgame

Tfgame.objects.filter().delete()