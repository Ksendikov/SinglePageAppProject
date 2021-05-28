from django.db import models
import datetime


class Table(models.Model):
    """table description"""
    date = models.DateField("Date", default=datetime.date.today())
    name = models.CharField('name', max_length=150)
    quantity = models.PositiveIntegerField('quantity', max_length=1000)
    distance = models.PositiveIntegerField('distance', max_length=15000)

    class Meta:
        verbose_name = 'Table'
        verbose_name_plural = 'Tables'

    def __str__(self):
        return self.name
