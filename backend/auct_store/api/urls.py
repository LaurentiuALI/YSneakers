from django.urls import path
from . import views 
from rest_framework.urlpatterns import format_suffix_patterns
<<<<<<< HEAD
from django.conf import settings
from django.conf.urls.static import static
=======
>>>>>>> 5427fcf4ac1f1151cce4e83b5a988a67de9c046b

urlpatterns = [
   path("", views.product_list),
   path("<int:id>", views.product_detail)
<<<<<<< HEAD
] +  static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======
]
>>>>>>> 5427fcf4ac1f1151cce4e83b5a988a67de9c046b

urlpatterns = format_suffix_patterns(urlpatterns)