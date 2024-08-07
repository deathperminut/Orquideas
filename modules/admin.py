from django.contrib import admin
from .models import TrainingModule, SpecificObjective, SkillAndLearning, Video, Lecture, ForumParticipation, Evidence, Activity, ChoiceQuestionary, SelectionMultipleQuestionary, OpenQuestionary

admin.site.register(TrainingModule)
admin.site.register(SpecificObjective)
admin.site.register(SkillAndLearning)
admin.site.register(Video)
admin.site.register(Lecture)
admin.site.register(ForumParticipation)
admin.site.register(Evidence)
admin.site.register(ChoiceQuestionary)
admin.site.register(SelectionMultipleQuestionary)
admin.site.register(OpenQuestionary)
