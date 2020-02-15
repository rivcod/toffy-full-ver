from django import forms
from .models import Tfuser

class RegisterForm(forms.Form):
    email = forms.EmailField(
        error_messages={
            'required': '이메일을 입력해주세요.'
        },
        max_length=64, label='email'
    )
    username = forms.CharField(
        error_messages={
            'required': '유저명을 입력해주세요.'
        },
        max_length=10, label='username'
    )
    password = forms.CharField(
        error_messages={
            'required': '비밀번호를 입력해주세요.'
        },
        widget=forms.PasswordInput, label='password'
    )

    def clean(self):
        cleaned_data = super().clean()
        email = cleaned_data.get('email')
        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        tfuser = tfuser(
            email=email,
            username=username,
            password=password
        )
        tfuser.save()