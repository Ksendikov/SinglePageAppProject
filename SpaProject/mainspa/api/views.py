from rest_framework import viewsets

from .serializers import TableSerializer
from ..models import Table
from .filter import TableFilter

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination


class TablePagination(PageNumberPagination):

    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 5


class TableViewSet(viewsets.ModelViewSet):

    queryset = Table.objects.all()
    serializer_class = TableSerializer
    pagination_class = TablePagination

    filter_backends = (DjangoFilterBackend, )
    filterset_class = TableFilter



