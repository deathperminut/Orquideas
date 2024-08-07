from django.contrib import admin
from .models import (
    TrainingModule,
    SpecificObjective,
    SkillAndLearning,
    Video,
    Lecture,
    ForumParticipation,
    Evidence,
    Activity,
    ChoiceQuestionary,
    SelectionMultipleQuestionary,
    OpenQuestionary,
    FormatText,
    Redaction,
)


class SpecificObjectiveInline(admin.TabularInline):
    model = TrainingModule.specific_objectives.through
    extra = 1


class SkillAndLearningInline(admin.TabularInline):
    model = TrainingModule.skills_and_learnings.through
    extra = 1


class FoundationsInline(admin.TabularInline):
    model = TrainingModule.foundations.through
    extra = 1


class EngageInline(admin.TabularInline):
    model = TrainingModule.engage.through
    extra = 1


class CoCreateInline(admin.TabularInline):
    model = TrainingModule.co_create.through
    extra = 1


class ReflectionInline(admin.TabularInline):
    model = TrainingModule.reflection.through
    extra = 1


class TrainingModuleAdmin(admin.ModelAdmin):
    inlines = [
        SpecificObjectiveInline,
        SkillAndLearningInline,
        FoundationsInline,
        EngageInline,
        CoCreateInline,
        ReflectionInline,
    ]
    exclude = (
        'specific_objectives',
        'skills_and_learnings',
        'foundations',
        'engage',
        'co_create',
        'reflection',
    )


admin.site.register(TrainingModule, TrainingModuleAdmin)
admin.site.register(SpecificObjective)


admin.site.register(SkillAndLearning)
admin.site.register(Video)
admin.site.register(Lecture)
admin.site.register(ForumParticipation)
admin.site.register(Evidence)
admin.site.register(ChoiceQuestionary)
admin.site.register(SelectionMultipleQuestionary)
admin.site.register(OpenQuestionary)
admin.site.register(Activity)
admin.site.register(FormatText)
admin.site.register(Redaction)
