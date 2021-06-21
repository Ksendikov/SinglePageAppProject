import django_filters
from ..models import Table


class TableFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name='name', lookup_expr='exact')

    quantity = django_filters.NumberFilter()
    quantity__exact = django_filters.NumberFilter(field_name='quantity', lookup_expr='exact')
    quantity__gt = django_filters.NumberFilter(field_name='quantity', lookup_expr='gt')
    quantity__lt = django_filters.NumberFilter(field_name='quantity', lookup_expr='lt')

    distance = django_filters.NumberFilter()
    distance__exact = django_filters.NumberFilter(field_name='distance', lookup_expr='exact')
    distance__gte = django_filters.NumberFilter(field_name='distance', lookup_expr='gt')
    distance__lt = django_filters.NumberFilter(field_name='distance', lookup_expr='lt')

    class Meta:
        model = Table
        fields = ['name', 'quantity', 'distance']