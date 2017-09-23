# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Person(models.Model):
    first_name  = models.CharField( max_length=100, default='' )
    middle_name = models.CharField( max_length=100, default='' )
    last_name   = models.CharField( max_length=100, default='' )
    tags        = models.CharField( max_length=100, default='' )
    comment     = models.TextField(                 default='' )
