from django import forms

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