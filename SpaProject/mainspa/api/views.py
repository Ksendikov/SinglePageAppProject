from rest_framework import viewsets

from .serializers import TableSerializer
from ..models import Table
from .filter import TableFilter

from django_filters.rest_framework import DjangoFilterBackend

class TableViewSet(viewsets.ModelViewSet):

    queryset = Table.objects.all()
    serializer_class = TableSerializer

    filter_backends = (DjangoFilterBackend, )
    filterset_class = TableFilter



