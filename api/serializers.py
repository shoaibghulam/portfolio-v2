from .models import *
from rest_framework import serializers

class AbooutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields ='__all__'