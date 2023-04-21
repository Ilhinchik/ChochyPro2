from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
#from Applications.serializers import ApplicationSerializer
from users.serializers import UserSerializer


# Create your views here.
class UserView(APIView):
    def get(self, request, pk):
        user  = get_object_or_404(User.objects.all(), pk=pk)
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = UserSerializer(user)
        return Response({"user": serializer.data})
    


    def post(self, request):
        user = request.data.get('user')
        # Create an author from the above data
        serializer = UserSerializer(data=user)
        if serializer.is_valid(raise_exception=True, partial=True):
            user_saved = serializer.save()
        return Response({"success": "Application '{}' created successfully".format(user_saved.title)})


class UsersView(APIView):
    def get(self, request):
        users = User.objects.all()
        # the many param informs the serializer that it will be serializing more than a single article.
        serializer = UserSerializer(users, many=True)
        return Response({"users": serializer.data})

    def post(self, request):
        user = request.data.get('user')
        # Create an article from the above data
        serializer = UserSerializer(data=user, partial=True)
        if serializer.is_valid(raise_exception=True):
            user_saved = serializer.save()
        return Response({"success": "User '{}' created successfully".format(user_saved.title)})

# Create your views here.
