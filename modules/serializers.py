from rest_framework import serializers
from .models import (
    TrainingModule,
    SpecificObjective,
    SkillAndLearning,
    Activity,
    Video,
    FormatText,
    Lecture,
    Evidence,
    Redaction,
    ForumParticipation,
    SelectionMultipleQuestionary,
    OpenQuestionary,
    ChoiceQuestionary,
)


class SpecificObjectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpecificObjective
        fields = ['description']


class SkillAndLearningSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkillAndLearning
        fields = ['description']


class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['description', 'video_link', 'video_file']


class FormatTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormatText
        fields = ['text']


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = ['title', 'content', 'link']


class EvidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evidence
        fields = ['description', 'upload']


class RedactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Redaction
        fields = ['description', 'text']


class ForumParticipationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForumParticipation
        fields = ['question', 'response']


class ChoiceQuestionarySerializer(serializers.ModelSerializer):
    class Meta:
        model = ChoiceQuestionary
        fields = ['choice_text', 'is_correct']


class SelectionMultipleQuestionarySerializer(serializers.ModelSerializer):
    choices = ChoiceQuestionarySerializer(many=True)

    class Meta:
        model = SelectionMultipleQuestionary
        fields = ['question_text', 'choices']


class OpenQuestionarySerializer(serializers.ModelSerializer):
    class Meta:
        model = OpenQuestionary
        fields = ['question', 'response']


class ActivitySerializer(serializers.ModelSerializer):

    format_text = FormatTextSerializer()
    lecture = LectureSerializer()
    evidence = EvidenceSerializer()
    video = VideoSerializer()
    redaction = RedactionSerializer()
    forum_participation = ForumParticipationSerializer()
    selection_multiple_questionary = SelectionMultipleQuestionarySerializer()
    open_questionary = OpenQuestionarySerializer()

    class Meta:
        model = Activity
        fields = [
            'format_text',
            'lecture',
            'evidence',
            'video',
            'redaction',
            'forum_participation',
            'selection_multiple_questionary',
            'open_questionary',
        ]
        extra_kwargs = {
            'format_text': {'allow_null': False},
            'lecture': {'allow_null': False},
            'evidence': {'allow_null': False},
            'video': {'allow_null': False},
            'redaction': {'allow_null': False},
            'forum_participation': {'allow_null': False},
            'selection_multiple_questionary': {'allow_null': False},
            'open_questionary': {'allow_null': False},
        }

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        return {
            key: value for key, value in ret.items() if value is not None
        }


class TrainingModuleSerializer(serializers.ModelSerializer):
    specific_objectives = SpecificObjectiveSerializer(
        many=True, read_only=True
    )
    skills_and_learnings = SkillAndLearningSerializer(
        many=True, read_only=True
    )
    foundations = ActivitySerializer(many=True, read_only=True)
    engage = ActivitySerializer(many=True, read_only=True)
    co_create = ActivitySerializer(many=True, read_only=True)
    reflection = ActivitySerializer(many=True, read_only=True)

    class Meta:
        model = TrainingModule
        fields = [
            'id',
            'module_name',
            'tag_line',
            'title',
            'description',
            'document',
            'created_at',
            'updated_at',
            'color',
            'general_objective',
            'specific_objectives',
            'skills_and_learnings',
            'foundations',
            'engage',
            'co_create',
            'reflection',
        ]
