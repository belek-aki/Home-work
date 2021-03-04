from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from person.models import Person
from person.serializers import PersonSerializers


class CreatePerson(APIView):
    authentication_classes = ()
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        person = PersonSerializers(data=request.data)
        if person.is_valid():
            person.save()
            return Response(person, status=200)
        else:
            return Response(status=403)


class GetAllPersons(APIView):
    authentication_classes = (JSONWebTokenAuthentication,)

    def get(self, request):
        persons = Person.objects.all()
        person_serializer = PersonSerializers(persons, many=True)
        return Response(person_serializer.data, status=200)

