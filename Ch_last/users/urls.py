from django.urls import path
from .views import UserView, UsersView

app_name = "Users"
# app_name will help us do a reverse look-up latter.
urlpatterns = [
    path('user/<int:pk>', UserView.as_view()),
    path('users/', UsersView.as_view()),
]