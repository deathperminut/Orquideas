# Generated by Django 5.0.7 on 2024-08-01 01:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0002_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="newsarticle",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
