from rest_framework.views import APIView
from rest_framework.response import Response
from .models import About
from .serializers import *
# Create your views here.

class AboutView(APIView):
    def get(self, request):
        data= About.objects.all()
        serData=AbooutSerializer(data, many=True)
        return Response(serData.data)
