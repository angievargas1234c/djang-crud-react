# Con esta instrucción definimos las rutas o urls
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from task import views

# versiones de Apis
router = routers.DefaultRouter()
router.register('task', views.TaskView, 'task')

urlpatterns = [
    path("api/v1/", include(router.urls)),  # Colocar / al final de v1
    path("docs/", include_docs_urls(title="Task API"))
]

