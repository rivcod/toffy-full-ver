from django import forms
from django.contrib.auth.hashers import check_password, make_password # 패스워드 암호화
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

        tfuser = Tfuser(
            email=email,
            username=username,
            password=make_password(password)
        )
        tfuser.save()

class LoginForm(forms.Form):
    email = forms.EmailField(
        error_messages={
            'required': '이메일을 입력해주세요.'
        },
        max_length=64, label='email'
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
        password = cleaned_data.get('password')

        if email and password:
            try:
                tfuser = Tfuser.objects.get(email=email)
            except Tfuser.DoesNotExist:
                self.add_error('email', '존재하지 않는 이메일입니다.')
                return

            if not check_password(password, tfuser.password):
                self.add_error('password', '비밀번호를 틀렸습니다')
            else:
                self.email = tfuser.email