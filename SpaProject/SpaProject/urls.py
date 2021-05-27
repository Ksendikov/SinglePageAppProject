from django.contrib import admin
from django.urls import path, include

from mainspa.views import index
# from SpaProject.mainspa.views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index),
    path('api/', include('mainspa.api.urls'))
]
