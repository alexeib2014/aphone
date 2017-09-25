# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

import json
from .models import Person

# Create your views here.


def persons_list(request):
    """
    List of persons
    :param request:
    :return: json list of persons
    """
    persons = Person.objects.order_by('first_name')

    table = []
    for person in persons:
        rec = {}
        rec['first_name']  = person.first_name
        rec['middle_name'] = person.middle_name
        rec['last_name']   = person.last_name
        rec['comment']     = person.comment
        table.append(rec)

    result = {'status': 'Ok',
               'table': table}

    return HttpResponse(json.dumps(result), content_type='application/json')
