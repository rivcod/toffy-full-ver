from rest_framework import serializers
from .models import Tfgame


class TfgameSerializer(serializers.ModelSerializer):
    # 시리얼라이저는 파이썬의 언어(파이썬 클래스)를 브라우저가 이해할 수 있는 json 형식으로 바꿔준다.
    class Meta:
        model = Tfgame
        fields = '__all__'