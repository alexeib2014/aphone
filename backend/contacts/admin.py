# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.

from .models import Person,Phone


class PhoneInline(admin.TabularInline):
    model = Phone
    extra = 0

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    inlines = [PhoneInline]


@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_display = ('person', 'number', 'type')
