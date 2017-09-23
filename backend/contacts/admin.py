# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.

from .models import Person,Phone,Tag


class PhoneInline(admin.TabularInline):
    model = Phone
    extra = 0

class TagInline(admin.TabularInline):
    model = Tag
    extra = 0

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    inlines = [PhoneInline,TagInline]


@admin.register(Phone)
class PhoneAdmin(admin.ModelAdmin):
    list_display = ('person', 'number', 'type')
    
    
@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ('person', 'tag')
    