from django.core.validators import RegexValidator
from django.db import models

# Create your models here.
from fernet_fields import EncryptedIntegerField


class Person(models.Model):

    class Meta:
        verbose_name = 'Информации ползователя'
        verbose_name_plural = 'Информация'

    last_name = models.CharField('Фамилия', max_length=125)
    first_name = models.CharField('Имя', max_length=125)
    patronymic_name = models.CharField('Отчество', max_length=125)
    address = models.CharField('Адрес', max_length=255)
    inn = EncryptedIntegerField('ИНН')
    phone_regex = RegexValidator(regex=r'^\+?1?\d{5,14}$',
                                 message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField('Телефон', validators=[phone_regex], max_length=14, blank=True)  # validators should be a list

    def __str__(self):
        return self.last_name