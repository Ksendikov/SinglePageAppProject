import datetime
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Table(models.Model):

    date = models.DateField('Date', default=datetime.date.today())
    name = models.CharField(max_length=150)
    quantity = models.IntegerField(validators = [MinValueValidator(0), MaxValueValidator(1500)])
    distance = models.PositiveIntegerField(validators = [MinValueValidator(0), MaxValueValidator(15000)])

    class Meta:
        verbose_name = 'Field table'
        verbose_name_plural = 'Fields table'
        ordering = ('-date',)

    def __str__(self):
        return self.name
