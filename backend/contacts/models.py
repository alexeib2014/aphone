# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Person(models.Model):
    first_name  = models.CharField( max_length=100, default='' )
    middle_name = models.CharField( max_length=100, default='', blank=True )
    last_name   = models.CharField( max_length=100, default='', blank=True )
    tags        = models.CharField( max_length=100, default='', blank=True )
    comment     = models.TextField(                 default='', blank=True )
    
    def __unicode__(self):
        return '%s %s %s' % (self.last_name, self.first_name, self.middle_name)

class Phone(models.Model):
    person  = models.ForeignKey(Person, on_delete=models.CASCADE)
    number  = models.CharField( max_length=100, default='' )
    type    = models.CharField( max_length=100, default='', blank=True )
    comment = models.TextField(                 default='', blank=True )
