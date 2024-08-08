# modules/models.py

from django.db import models
from django.conf import settings


class SpecificObjective(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description


class SkillAndLearning(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description


class Video(models.Model):
    description = models.TextField()
    video_link = models.URLField(max_length=300, blank=True, null=True)
    video_file = models.FileField(upload_to='videos/', null=True, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Lecture(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(blank=True)
    link = models.URLField(max_length=300, blank=True, null=True)


class ForumParticipation(models.Model):
    question = models.TextField()
    response = models.TextField(null=True, blank=True)


class Evidence(models.Model):
    description = models.TextField()
    upload = models.FileField(upload_to='evidence/', null=True, blank=True)


class ChoiceQuestionary(models.Model):
    choice_text = models.CharField(max_length=500)
    is_correct = models.BooleanField(default=False)


class SelectionMultipleQuestionary(models.Model):
    question_text = models.CharField(max_length=500)
    choices = models.ManyToManyField(ChoiceQuestionary)


class OpenQuestionary(models.Model):
    question = models.TextField()
    response = models.TextField()


class FormatText(models.Model):
    text = models.TextField()


class Redaction(models.Model):
    description = models.TextField()
    text = models.TextField(blank=True, null=True)


class Activity(models.Model):
    """"""

    format_text = models.ForeignKey(
        FormatText, on_delete=models.CASCADE, null=True, blank=True
    )
    lecture = models.ForeignKey(
        Lecture, on_delete=models.CASCADE, null=True, blank=True
    )
    evidence = models.ForeignKey(
        Evidence, on_delete=models.CASCADE, null=True, blank=True
    )
    lecture = models.ForeignKey(
        Lecture, on_delete=models.CASCADE, null=True, blank=True
    )
    video = models.ForeignKey(
        Video, on_delete=models.CASCADE, null=True, blank=True
    )
    redaction = models.ForeignKey(
        Redaction, on_delete=models.CASCADE, null=True, blank=True
    )
    forum_participation = models.ForeignKey(
        ForumParticipation, on_delete=models.CASCADE, null=True, blank=True
    )
    selection_multiple_questionary = models.ForeignKey(
        SelectionMultipleQuestionary,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    open_questionary = models.ForeignKey(
        OpenQuestionary, on_delete=models.CASCADE, null=True, blank=True
    )

    def __str__(self):
        return (
            self.format_text.text
            if self.format_text
            else (
                self.lecture.title
                if self.lecture
                else (
                    self.evidence.description
                    if self.evidence
                    else (
                        self.video.description
                        if self.video
                        else (
                            self.redaction.description
                            if self.redaction
                            else (
                                self.forum_participation.question
                                if self.forum_participation
                                else (
                                    self.selection_multiple_questionary.question_text
                                    if self.selection_multiple_questionary
                                    else (
                                        self.open_questionary.question
                                        if self.open_questionary
                                        else ''
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )


class TrainingModule(models.Model):
    module_name = models.CharField(max_length=200)
    tag_line = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    color = models.CharField(max_length=10)
    document = models.FileField(upload_to='modules/', null=True, blank=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    general_objective = models.TextField(blank=True)
    specific_objectives = models.ManyToManyField(
        'SpecificObjective', blank=True
    )
    skills_and_learnings = models.ManyToManyField(
        'SkillAndLearning', blank=True
    )
    foundations = models.ManyToManyField(
        'Activity', blank=True, related_name='foundation_modules'
    )
    engage = models.ManyToManyField(
        'Activity', blank=True, related_name='engage_modules'
    )
    co_create = models.ManyToManyField(
        'Activity', blank=True, related_name='co_create_modules'
    )
    reflection = models.ManyToManyField(
        'Activity', blank=True, related_name='reflection_modules'
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_at']
