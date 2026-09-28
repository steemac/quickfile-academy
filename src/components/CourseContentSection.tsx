import React, { useState } from 'react';
import { Section, Lesson } from '../types';
import {
  ChevronRight,
  Play,
  MinusCircle,
  PlusCircle,
  FileText,
  FolderDown,
  ExternalLink,
  Youtube,
  CheckCircle2,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { QuickFileLogo } from './QuickFileLogo';

interface CourseContentSectionProps {
  sections: Section[];
  lessons: Record<number, Lesson>;
  onSelectLesson: (lessonId: number) => void;
  completedLessons: number[];
  inDevelopment?: boolean;
}

export const CourseContentSection: React.FC<CourseContentSectionProps> = ({
  sections,
  lessons,
  onSelectLesson,
  completedLessons,
  inDevelopment,
}) => {
  const [activeSectionId, setActiveSectionId] = useState<number>(1);
  // Default Section 1 open like in the screenshot
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    1: true,
  });

  const toggleSection = (sectionNumber: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionNumber]: !prev[sectionNumber],
    }));
  };

  const handleSidebarClick = (sectionNumber: number) => {
    setActiveSectionId(sectionNumber);
    setExpandedSections((prev) => ({
      ...prev,
      [sectionNumber]: true,
    }));
    const element = document.getElementById(`section-${sectionNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="course-content" className="py-12 lg:py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Sidebar Navigation matching image.png */}
          <aside className="lg:col-span-4 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden lg:sticky lg:top-24 z-10 isolate">
            <div className="p-5 border-b border-slate-100 bg-white">
              <h2 className="text-xl font-bold text-slate-800">Course Content</h2>
              <p className="text-sm text-slate-500 mt-0.5">
                {sections.length} sections • {Object.values(lessons).filter((l) => !l.isQuiz).length || Object.keys(lessons).length} lessons
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {sections.map((sec) => {
                const isActive = activeSectionId === sec.n;
                const isAllCompleted = sec.lessons.every((id) => completedLessons.includes(id));
                const completedInSec = sec.lessons.filter((id) => completedLessons.includes(id)).length;

                return (
                  <button
                    key={sec.n}
                    onClick={() => handleSidebarClick(sec.n)}
                    className={`w-full flex items-center justify-between p-4 text-left transition-colors cursor-pointer group ${
                      isActive
                        ? 'bg-blue-50/80 text-[#4b7ff5] font-semibold border-l-4 border-[#4b7ff5]'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#4b7ff5] text-white shadow-xs'
                            : isAllCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-400 text-white group-hover:bg-slate-500'
                        }`}
                      >
                        {isAllCompleted ? '✓' : sec.n}
                      </span>
                      <div>
                        <span className="text-sm font-medium block leading-tight">
                          {sec.title}
                        </span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          {sec.lessons.length} {sec.lessons.length === 1 ? 'lesson' : 'lessons'}
                          {completedInSec > 0 && ` • ${completedInSec}/${sec.lessons.length} done`}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#4b7ff5] translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT COLUMN: Section Cards & Lesson details */}
          <main className="lg:col-span-8 space-y-6">
            {inDevelopment && (
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200/90 shadow-2xs flex items-start gap-3.5 text-amber-900">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-amber-950">
                    Course 3 Curriculum Under Development
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-800 mt-1 leading-relaxed">
                    This advanced course is currently being prepared. You can explore the planned curriculum structure, nominal accounts syllabus, and learning modules below. Video guides and practical resources will be released once finalised.
                  </p>
                </div>
              </div>
            )}

            {sections.map((sec) => {
              const isExpanded = expandedSections[sec.n] ?? false;

              return (
                <div
                  key={sec.n}
                  id={`section-${sec.n}`}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
                >
                  {/* Section Card Header */}
                  <div
                    onClick={() => toggleSection(sec.n)}
                    className="p-6 flex items-start justify-between cursor-pointer hover:bg-slate-50/80 transition-colors select-none"
                  >
                    <div>
                      <span className="text-xs font-semibold text-[#4b7ff5] uppercase tracking-wider block">
                        Section {sec.n}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {sec.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                        <span>
                          {sec.lessons.length} {sec.lessons.length === 1 ? 'lesson' : 'lessons'}
                        </span>
                        <span>•</span>
                        <span>{sec.duration}</span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1 max-w-xl">
                        {sec.desc}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-[#4b7ff5] hover:text-[#3b70e6] p-1 focus:outline-hidden"
                      aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
                    >
                      {isExpanded ? (
                        <MinusCircle className="w-6 h-6 stroke-[1.75]" />
                      ) : (
                        <PlusCircle className="w-6 h-6 stroke-[1.75]" />
                      )}
                    </button>
                  </div>

                  {/* Lessons List inside section */}
                  {isExpanded && (
                    <div className="border-t border-slate-100 p-4 sm:p-6 space-y-4 bg-[#fcfdfe]">
                      {sec.lessons.map((lessonId) => {
                        const lesson = lessons[lessonId];
                        if (!lesson) return null;
                        const isDone = completedLessons.includes(lessonId);
                        const isVideo = Boolean(lesson.video || lesson.youtube || lesson.videoTitle);

                        return (
                          <div
                            key={lessonId}
                            className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col md:flex-row gap-5 items-start justify-between"
                          >
                            {/* Lesson Thumbnail (Video or Article) */}
                            <div
                              onClick={() => onSelectLesson(lessonId)}
                              className="w-full md:w-[240px] aspect-16/10 bg-gradient-to-br from-[#4b7ff5] via-[#3b82f6] to-[#25afe0] rounded-lg p-3 text-white relative cursor-pointer group shrink-0 overflow-hidden shadow-xs flex flex-col justify-between isolate"
                            >
                              {/* Background pattern */}
                              <div className="absolute inset-0 bg-blue-950/15 group-hover:bg-blue-950/10 transition-colors" />

                              <div className="relative z-10 flex items-center justify-between">
                                <QuickFileLogo className="h-3 w-auto" variant="white" />
                                {!isVideo && (
                                  <span className="px-1.5 py-0.5 rounded bg-white/20 text-[9px] font-semibold tracking-wide uppercase">
                                    {lesson.isQuiz ? 'Quiz' : 'Text Guide'}
                                  </span>
                                )}
                              </div>

                              <div className="relative z-10">
                                <p className="text-[11px] font-semibold text-white/95 leading-tight line-clamp-2">
                                  {lesson.title}
                                </p>
                              </div>

                              {/* Center icon button (Play for video, FileText for reading, HelpCircle for quiz) */}
                              <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-10 h-10 rounded-full bg-slate-900/60 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#4b7ff5] transition-all shadow-md">
                                  {lesson.isQuiz ? (
                                    <HelpCircle className="w-5 h-5" />
                                  ) : isVideo ? (
                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                  ) : (
                                    <FileText className="w-4 h-4" />
                                  )}
                                </div>
                              </div>

                              {/* Duration / Reading Pill bottom right */}
                              <div className="relative z-10 self-end">
                                <span className="px-1.5 py-0.5 rounded bg-slate-900/80 text-[10px] font-medium text-white/95">
                                  {lesson.duration}
                                </span>
                              </div>
                            </div>

                            {/* Lesson Information & Meta */}
                            <div className="flex-1 min-w-0 space-y-2">
                              <div className="flex items-center gap-2">
                                <h4
                                  onClick={() => onSelectLesson(lessonId)}
                                  className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#4b7ff5] cursor-pointer transition-colors"
                                >
                                  {lesson.isQuiz
                                    ? lesson.title
                                    : lesson.displayNumber
                                    ? `Lesson ${lesson.displayNumber} - ${lesson.title}`
                                    : lesson.title.startsWith('Lesson')
                                    ? lesson.title
                                    : `${lessonId}. ${lesson.title}`}
                                </h4>
                                {isDone && (
                                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                    <CheckCircle2 className="w-3 h-3" />
                                    Completed
                                  </span>
                                )}
                              </div>

                              <p className="text-sm text-slate-600 leading-relaxed">
                                {lesson.objective}
                              </p>

                              {/* Resource links row matching image.png (hidden for lesson 1 and quizzes) */}
                              {lessonId !== 1 && !lesson.isQuiz && (
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-medium text-[#4b7ff5]">
                                  <button
                                    type="button"
                                    onClick={() => onSelectLesson(lessonId)}
                                    className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                                  >
                                    <FileText className="w-3.5 h-3.5 text-[#4b7ff5]" />
                                    <span>Lesson notes</span>
                                  </button>

                                  {lesson.resource && lesson.resource.length > 0 && (
                                    <button
                                      type="button"
                                      onClick={() => onSelectLesson(lessonId)}
                                      className="inline-flex items-center gap-1 hover:underline cursor-pointer"
                                    >
                                      <FolderDown className="w-3.5 h-3.5 text-blue-500" />
                                      <span>Exercise files</span>
                                    </button>
                                  )}

                                  {lesson.support && (
                                    <a
                                      href={lesson.support}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 hover:underline"
                                    >
                                      <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                                      <span>Related support article</span>
                                    </a>
                                  )}

                                  {lesson.video && lesson.youtube && (
                                    <a
                                      href={lesson.youtube}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1 hover:underline"
                                    >
                                      <Youtube className="w-3.5 h-3.5 text-red-500" />
                                      <span>Watch on YouTube</span>
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Start Lesson Action Button */}
                            <div className="shrink-0 w-full md:w-auto pt-2 md:pt-0">
                              <button
                                onClick={() => onSelectLesson(lessonId)}
                                className="cursor-pointer w-full md:w-auto px-5 py-2.5 rounded-lg font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-md transition-all active:scale-95"
                              >
                                {lesson.assessment
                                  ? 'Assessment'
                                  : lesson.isQuiz
                                  ? isDone
                                    ? 'Review Quiz'
                                    : 'Start Quiz'
                                  : isDone
                                  ? 'Review Lesson'
                                  : lesson.video
                                  ? 'Start Lesson'
                                  : 'Read Lesson'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </section>
  );
};
