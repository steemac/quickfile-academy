import React from 'react';
import {
  CheckCircle2,
  Building2,
  Users,
  AlertCircle,
  Sparkles,
  BookOpen,
  ArrowRight,
  Award,
} from 'lucide-react';
import { Course } from '../types';

interface CourseOverviewProps {
  course: Course;
  onScrollToCurriculum?: () => void;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({
  course,
  onScrollToCurriculum,
}) => {
  // If the course does not define whatYoullLearn, we don't render this extra section
  if (!course.whatYoullLearn && !course.practicalLearning && !course.targetAudience) {
    return null;
  }

  return (
    <section className="bg-white border-b border-slate-200/80 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Header & Description */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#2563eb] border border-blue-100">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Course Blueprint & Practical Syllabus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {course.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {course.longDescription || course.description}
          </p>
        </div>

        {/* What You'll Learn - High Density 2-Column Grid */}
        {course.whatYoullLearn && course.whatYoullLearn.length > 0 && (
          <div className="bg-slate-50/75 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#2563eb]" />
                  <span>What You'll Learn</span>
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  {course.whatYoullLearn.length} core competencies mastered throughout this training
                </p>
              </div>
              {onScrollToCurriculum && (
                <button
                  type="button"
                  onClick={onScrollToCurriculum}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] cursor-pointer self-start sm:self-auto"
                >
                  <span>Jump to Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {course.whatYoullLearn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/70 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structured Context Panels: Practical Learning, Who is this for, Outcomes/Assessment or What isn't covered */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Practical Learning with Sample Business */}
          {course.practicalLearning && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Practical Learning
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.practicalLearning}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Hands-on case study with Brightside Web Design Ltd</span>
              </div>
            </div>
          )}

          {/* Who is this course for? */}
          {course.targetAudience && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Who Is This Course For?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.targetAudience}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Zero previous bookkeeping experience required</span>
              </div>
            </div>
          )}

          {/* Outcomes & Assessment (if specified) */}
          {course.learningOutcomes && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Outcomes & Assessment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.learningOutcomes}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span>Includes practical knowledge checks and end-of-course assessment</span>
              </div>
            </div>
          )}

          {/* What isn't covered? (if specified and no learningOutcomes) */}
          {!course.learningOutcomes && course.notCovered && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  What Isn't Covered?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {course.notCovered}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-700">
                <span>Advanced topics covered in subsequent QuickFile training</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
