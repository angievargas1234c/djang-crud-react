from django.db import models

# Crea tus modelos aquí.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    donde = models.BooleanField(default=False)

    def __str__(self):
        return self.title # Esto mostrara el titulo en lugar de "Task object (1)" 
    

    
