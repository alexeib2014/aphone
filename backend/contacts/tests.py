# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from django.urls import reverse
from .models import Person


class PersonIndexTests(TestCase):
    def test_no_persons(self):
        response = self.client.get(reverse('contacts:persons_list'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, '{"status": "Ok", "table": []}')

    def test_with_person(self):
        Person.objects.create(first_name='Alexei', last_name='Bushuev')
        response = self.client.get(reverse('contacts:persons_list'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, '{"status": "Ok", "table": [{"comment": "",'
                                           ' "first_name": "Alexei", "last_name": "Bushuev", "middle_name": ""}]}')
