from rest_framework import routers
from .views import TableViewSet

router = routers.SimpleRouter()
router.register(prefix='table', viewset=TableViewSet, basename='table')


urlpatterns = []
urlpatterns += router.urls