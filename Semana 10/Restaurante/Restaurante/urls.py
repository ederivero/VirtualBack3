from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("almacen/", include("Almacen.urls")),
    path("facturacion/", include("Facturacion.urls")),
]
