# Generated by Django 4.1.3 on 2022-12-10 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("code", models.CharField(default="", max_length=12, unique=True)),
                ("model", models.CharField(default="", max_length=100)),
                ("brand", models.CharField(default="", max_length=100)),
                ("color", models.CharField(default="", max_length=100)),
                ("gender", models.CharField(default="", max_length=10)),
                ("release_year", models.CharField(default="", max_length=4)),
                ("size", models.CharField(default="", max_length=3)),
                ("condition", models.CharField(default="", max_length=20)),
                (
                    "starting_price",
                    models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
