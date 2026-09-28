import React from 'react';
import { Lesson, Section } from '../types';
import {
  X,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  FileSpreadsheet,
  ExternalLink,
  Award,
  FileText,
  Building2,
  AlertCircle,
  Info,
  Youtube,
  HelpCircle,
  Play,
} from 'lucide-react';
import { SectionQuiz } from './SectionQuiz';

interface LessonModalProps {
  lesson: Lesson | null;
  section: Section | null;
  onClose: () => void;
  onNextLesson?: (nextId: number) => void;
  onPrevLesson?: (prevId: number) => void;
  isCompleted: boolean;
  onToggleComplete: (lessonId: number) => void;
  onOpenAssessment: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  section,
  onClose,
  onNextLesson,
  onPrevLesson,
  isCompleted,
  onToggleComplete,
  onOpenAssessment,
}) => {
  if (!lesson) return null;

  const isIntroduction = lesson.id === 1 && lesson.title === 'Introduction';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200 font-sans">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/90">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
              {isIntroduction ? (
                <>
                  <FileText className="w-3.5 h-3.5" />
                  <span>Section 1: Introduction • Lecture 1: Introduction</span>
                </>
              ) : lesson.isQuiz ? (
                <>
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{section ? `Section ${section.n} — ${section.title}` : 'QuickFile Course'} • Knowledge Quiz</span>
                </>
              ) : (
                <span>
                  {section ? `Section ${section.n} — ${section.title}` : 'QuickFile Course'} •{' '}
                  {lesson.displayNumber ? `Lesson ${lesson.displayNumber}` : `Lesson ${lesson.id}`}
                </span>
              )}
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
              {lesson.displayNumber && !lesson.title.startsWith('Lesson')
                ? `Lesson ${lesson.displayNumber} - ${lesson.title}`
                : lesson.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Close lesson view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-6">
          {/* If Introduction Lesson (Section 1), display the exact rich article text with NO video */}
          {isIntroduction ? (
            <div className="space-y-7 text-slate-800">
              {/* Main Article Title */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Welcome to QuickFile Essentials
                </h1>
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200">
                    <FileText className="w-3 h-3" /> Reading Article
                  </span>
                  <span>•</span>
                  <span>Estimated read time: 5 minutes</span>
                </p>
              </div>

              {/* Introductory Paragraphs */}
              <div className="space-y-3.5 text-base sm:text-[16.5px] leading-relaxed text-slate-700">
                <p>
                  Welcome to <strong>QuickFile Essentials</strong>, a practical beginner’s course designed to help you become confident using QuickFile for everyday business bookkeeping.
                </p>
                <p>
                  Throughout the course, you’ll work through a fictional training business called <strong>Brightside Web Design Ltd</strong>. This allows you to practise common bookkeeping tasks using realistic examples without using your own business data.
                </p>
              </div>

              {/* What you'll learn */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3">
                <h2 className="text-lg font-bold text-slate-900">
                  What you’ll learn
                </h2>
                <p className="text-sm text-slate-600 font-medium">
                  By the end of this course, you’ll be able to:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-1">
                  {[
                    'Navigate the main areas of QuickFile.',
                    'Set up key account information and understand team access.',
                    'Create and manage customers and suppliers.',
                    'Create sales invoices and record purchases.',
                    'Create reusable inventory items.',
                    'Import bank transactions using CSV files.',
                    'Understand how Open Banking feeds work.',
                    'Tag customer receipts, supplier payments and business expenses.',
                    'Create automated bank tagging rules.',
                    'Reconcile your QuickFile bank account.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How the course works */}
              <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                <h2 className="text-lg font-bold text-slate-900">
                  How the course works
                </h2>
                <p>
                  The course combines short instructional videos, written guidance and practical exercises.
                </p>
                <p>
                  You’ll gradually build the Brightside Web Design Ltd training account as you progress. Later lessons build on information entered during earlier lessons, so completing the practical exercises in order is recommended.
                </p>
                <p>
                  Training files are provided throughout the course where they are needed.
                </p>
              </div>

              {/* Your training business */}
              <div className="space-y-3 text-base text-slate-700">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <span>Your training business</span>
                </h2>
                <p>For the exercises, we’ll use:</p>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2.5 text-sm sm:text-base">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-semibold block">Business</span>
                      <span className="font-bold text-slate-900">Brightside Web Design Ltd</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-semibold block">Business type</span>
                      <span className="font-medium text-slate-800">Web design and digital services</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-semibold block">VAT status</span>
                      <span className="font-medium text-slate-800">VAT registered</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-semibold block">Training period</span>
                      <span className="font-medium text-slate-800">September 2026</span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs uppercase font-semibold block">Starting bank balance</span>
                      <span className="font-bold text-emerald-600">£1,000.00</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic">
                  All names, businesses, transactions and contact details supplied for the exercises are fictional and intended for training purposes only.
                </p>
              </div>

              {/* Before you begin */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-5 text-amber-950 space-y-1.5">
                <h2 className="text-base font-bold text-amber-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Before you begin</span>
                </h2>
                <p className="text-sm leading-relaxed text-amber-900/90">
                  For the best experience, use a QuickFile account that you are comfortable using for training and testing. Avoid entering fictional transactions into a live business account containing real accounting records.
                </p>
              </div>
            </div>
          ) : lesson.isQuiz && lesson.quizQuestions ? (
            <SectionQuiz
              quizTitle={lesson.title}
              questions={lesson.quizQuestions}
              onSelectLesson={(targetId) => {
                if (onNextLesson) onNextLesson(targetId);
              }}
              onPassQuiz={() => {
                if (!isCompleted) onToggleComplete(lesson.id);
              }}
            />
          ) : (
            <>
              {/* Video Player or Presentation Frame for lessons with video, youtube, or videoTitle */}
              {(lesson.video || lesson.youtube || lesson.videoTitle) && (
                <div className="space-y-2">
                  <div className="rounded-xl overflow-hidden bg-slate-950 aspect-video shadow-md border border-slate-800 relative">
                    {lesson.youtube || lesson.video ? (
                      <iframe
                        src={
                          lesson.youtube && lesson.youtube.match(/(?:v=|youtu\.be\/|\/embed\/)([^&?/\s]+)/)
                            ? `https://www.youtube-nocookie.com/embed/${lesson.youtube.match(/(?:v=|youtu\.be\/|\/embed\/)([^&?/\s]+)/)![1]}?rel=0`
                            : `https://drive.google.com/file/d/${lesson.video}/preview`
                        }
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                        title={lesson.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 flex flex-col justify-between p-6 sm:p-8 text-white select-none">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs flex items-center justify-center border border-white/20">
                              <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                            </div>
                            <span className="text-xs font-bold tracking-wider uppercase text-blue-200">
                              QuickFile Basics • Course Video
                            </span>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-xs text-xs font-semibold text-white border border-white/20">
                            {lesson.duration}
                          </span>
                        </div>
                        <div className="space-y-2 my-auto text-center py-4">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-xs text-white mx-auto flex items-center justify-center border border-white/30 shadow-lg">
                            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
                          </div>
                          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white">
                            {lesson.videoTitle || lesson.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-blue-100/90 max-w-lg mx-auto">
                            {lesson.objective}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-blue-200/80 pt-2 border-t border-white/10">
                          <span>Training Business: Brightside Web Design Ltd</span>
                          <span>Complete workflow guide</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {lesson.videoTitle && (
                    <div className="flex items-center justify-between text-xs text-slate-500 px-1">
                      <span className="font-medium text-slate-700">{lesson.videoTitle}</span>
                      <div className="flex items-center gap-3">
                        {lesson.youtube && (
                          <a
                            href={lesson.youtube}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700 hover:underline"
                          >
                            <Youtube className="w-3.5 h-3.5 text-red-600" />
                            <span>Watch on YouTube</span>
                          </a>
                        )}
                        <span className="bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded">
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Lesson Body paragraphs */}
              <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base">
                {lesson.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Structured Text Sections (e.g. for Text Guides like Bank Reconciliation) */}
              {lesson.textSections && lesson.textSections.length > 0 && (
                <div className="space-y-5 pt-1">
                  {lesson.textSections.map((sec, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs space-y-3"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                        {sec.title}
                      </h3>

                      {sec.paragraphs && sec.paragraphs.length > 0 && (
                        <div className="space-y-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                          {sec.paragraphs.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>
                      )}

                      {sec.highlight && (
                        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg inline-block">
                          <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider block">
                            Expected Closing Balance
                          </span>
                          <span className="text-xl font-extrabold text-emerald-700">
                            {sec.highlight}
                          </span>
                        </div>
                      )}

                      {sec.lead && (
                        <p className="text-sm sm:text-base text-slate-700 font-medium whitespace-pre-line leading-relaxed">
                          {sec.lead}
                        </p>
                      )}

                      {sec.items && sec.items.length > 0 && (
                        <ul className="space-y-2 text-sm text-slate-700 pt-1">
                          {sec.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-blue-600 font-bold text-base leading-none mt-0.5">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {sec.kvs && sec.kvs.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          {sec.kvs.map(([k, v], idx) => (
                            <div
                              key={idx}
                              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 px-3 bg-slate-50 rounded-md border border-slate-200/70 text-xs sm:text-sm font-sans"
                            >
                              <span className="font-semibold text-slate-700">{k}:</span>
                              <span className="font-bold text-slate-900">{v}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.sublead && (
                        <p className="text-sm sm:text-base text-slate-700 font-medium pt-2">
                          {sec.sublead}
                        </p>
                      )}

                      {sec.kvs2 && sec.kvs2.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          {sec.kvs2.map(([k, v], idx) => (
                            <div
                              key={idx}
                              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 px-3 bg-slate-50 rounded-md border border-slate-200/70 text-xs sm:text-sm font-sans"
                            >
                              <span className="font-semibold text-slate-700">{k}:</span>
                              <span className="font-bold text-slate-900">{v}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.sublead2 && (
                        <p className="text-sm sm:text-base text-slate-700 font-medium pt-2">
                          {sec.sublead2}
                        </p>
                      )}

                      {sec.kvs3 && sec.kvs3.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          {sec.kvs3.map(([k, v], idx) => (
                            <div
                              key={idx}
                              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 px-3 bg-slate-50 rounded-md border border-slate-200/70 text-xs sm:text-sm font-sans"
                            >
                              <span className="font-semibold text-slate-700">{k}:</span>
                              <span className="font-bold text-slate-900">{v}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.followUp && (
                        <p className="text-sm sm:text-base text-slate-700 font-medium pt-2 leading-relaxed italic bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                          {sec.followUp}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Practical Exercise Box */}
              {lesson.exercise && (
                <div className="bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl p-4 sm:p-5 space-y-2">
                  <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide flex items-center gap-1.5">
                    <span>Practical Exercise</span>
                  </h3>
                  <p className="text-sm text-slate-800 font-medium leading-relaxed">
                    {lesson.exercise}
                  </p>
                  {lesson.exerciseDetails && lesson.exerciseDetails.length > 0 && (
                    <div className="space-y-1.5 text-sm text-slate-700 pt-1 leading-relaxed">
                      {lesson.exerciseDetails.map((det, idx) => {
                        if (det.startsWith('Go to:')) {
                          return (
                            <p key={idx} className="font-semibold text-slate-800 pt-1">
                              Go to:{' '}
                              <span className="font-bold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                                {det.replace(/^Go to:\s*/, '')}
                              </span>
                            </p>
                          );
                        }
                        if (det.startsWith('• ')) {
                          return (
                            <div key={idx} className="flex items-start gap-2 pl-2">
                              <span className="text-blue-600 font-bold text-base leading-none mt-0.5">•</span>
                              <span className="text-slate-800 text-xs sm:text-sm">{det.slice(2)}</span>
                            </div>
                          );
                        }
                        if (
                          det === 'Why Use the Description?' ||
                          det.startsWith('Leave These Two Transactions') ||
                          det.startsWith('Create these two purchases:') ||
                          det.startsWith('Create the following purchase:')
                        ) {
                          return (
                            <h4 key={idx} className="font-bold text-slate-900 pt-2 text-sm uppercase tracking-wide">
                              {det}
                            </h4>
                          );
                        }
                        const isKv = /^(Company|Contact|Email|Telephone|Account reference|Payment terms|Type of purchase|Client|Course reference|Invoice date|Description|Quantity|Net amount|VAT rate|VAT|Total|Supplier|Purchase date|Account name|Opening balance|Transaction Date|Amount|Bank Statement Import|Open Banking Feed):/.test(
                          det
                        );
                        if (isKv) {
                          const colonIdx = det.indexOf(':');
                          const label = det.slice(0, colonIdx);
                          const val = det.slice(colonIdx + 1).trim();
                          return (
                            <div
                              key={idx}
                              className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 py-1 px-2.5 bg-white rounded-md border border-blue-200/80 text-xs sm:text-sm font-sans"
                            >
                              <span className="font-semibold text-slate-600 sm:w-44 shrink-0">{label}:</span>
                              <span className="font-bold text-slate-900">{val}</span>
                            </div>
                          );
                        }
                        if (det.includes(' — ')) {
                          const parts = det.split(' — ');
                          return (
                            <div
                              key={idx}
                              className="flex flex-col gap-1 py-2 px-3 bg-white rounded-md border border-blue-200/80 text-xs sm:text-sm font-sans"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-bold text-slate-900">{parts[0]}</span>
                                {parts[1] && (
                                  <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                    {parts[1]}
                                  </span>
                                )}
                              </div>
                              {parts[2] && (
                                <p className="text-slate-600 font-medium text-xs pt-0.5 border-t border-slate-100">
                                  {parts[2]}
                                </p>
                              )}
                            </div>
                          );
                        }
                        return (
                          <p
                            key={idx}
                            className={
                              det.startsWith("Don't")
                                ? "text-slate-600 italic text-xs sm:text-sm pt-1"
                                : det.startsWith("Notice that")
                                ? "text-slate-700 font-medium pt-2 leading-relaxed"
                                : "text-slate-800"
                            }
                          >
                            {det}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Expected Result Box */}
              {lesson.expectedResult && (
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 sm:p-5 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wide">
                    Expected Result
                  </h3>
                  <p className="text-sm text-emerald-900 font-medium leading-relaxed">
                    {lesson.expectedResult.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {lesson.expectedResult.groups.map((grp, gIdx) => (
                      <div key={gIdx} className="space-y-1.5">
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          {grp.category}
                        </span>
                        <ul className="space-y-1.5 text-sm text-slate-800">
                          {grp.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold text-base leading-none mt-0.5">•</span>
                              <span className="font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Point Box */}
              {lesson.keyPoint && (
                <div className="bg-sky-50/80 border border-sky-200/90 rounded-xl p-4 sm:p-5 text-sky-950 space-y-1.5">
                  <h3 className="text-sm font-bold text-sky-900 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-sky-600" />
                    <span>Key Point</span>
                  </h3>
                  <p className="text-sm text-sky-900/90 leading-relaxed font-medium">
                    {lesson.keyPoint}
                  </p>
                </div>
              )}

              {/* Checklist ("Before continuing, make sure you can:" or "What you'll learn") */}
              {lesson.learn && lesson.learn.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2.5">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    {lesson.checklistTitle || 'What you’ll learn'}
                  </h3>
                  {lesson.checklistTitle === 'Before Continuing' && (
                    <p className="text-sm font-medium text-slate-700">Make sure you can:</p>
                  )}
                  <ul className="space-y-2 text-sm text-slate-700">
                    {lesson.learn.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-blue-600 font-bold text-base leading-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Exercise Section (e.g. Create the Remaining Sales Invoices) */}
              {lesson.additionalSection && (
                <div className="space-y-4 pt-2 border-t border-slate-200">
                  <div className="bg-blue-50/80 border-l-4 border-blue-600 rounded-r-xl p-4 sm:p-5 space-y-3">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                      {lesson.additionalSection.title}
                    </h3>
                    {lesson.additionalSection.lead && (
                      <p className="text-sm text-slate-800 font-medium leading-relaxed">
                        {lesson.additionalSection.lead}
                      </p>
                    )}
                    {lesson.additionalSection.invoices && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        {lesson.additionalSection.invoices.map((inv, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-lg border border-blue-200/80 p-3.5 space-y-2 text-xs sm:text-sm"
                          >
                            <div className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-1.5">
                              {inv.name}
                            </div>
                            <div className="space-y-1 text-slate-700">
                              <div className="flex justify-between">
                                <span className="text-slate-500">Invoice date:</span>
                                <span className="font-medium text-slate-900">{inv.date}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Description:</span>
                                <span className="font-medium text-slate-900">{inv.description}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Quantity:</span>
                                <span className="font-medium text-slate-900">{inv.quantity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Net amount:</span>
                                <span className="font-medium text-slate-900">{inv.net}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">VAT:</span>
                                <span className="font-medium text-slate-900">{inv.vat}</span>
                              </div>
                              <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100">
                                <span>Total:</span>
                                <span className="text-blue-700">{inv.total}</span>
                              </div>
                              {inv.note && (
                                <p className="text-slate-500 italic text-xs pt-1">{inv.note}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {lesson.additionalSection.followUp && (
                      <div className="space-y-2 text-sm text-slate-700 pt-1 leading-relaxed">
                        {lesson.additionalSection.followUp.map((f, fIdx) => (
                          <p key={fIdx}>{f}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {lesson.additionalSection.checklist && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-2.5">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                        {lesson.additionalSection.checklistTitle || 'Before Continuing'}
                      </h3>
                      {lesson.additionalSection.checklistSubtitle && (
                        <p className="text-sm font-medium text-slate-700">
                          {lesson.additionalSection.checklistSubtitle}
                        </p>
                      )}
                      <ul className="space-y-2 text-sm text-slate-700">
                        {lesson.additionalSection.checklist.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-blue-600 font-bold text-base leading-none mt-0.5">•</span>
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Exercise Follow-up paragraphs */}
              {lesson.exerciseFollowUp && lesson.exerciseFollowUp.length > 0 && (
                <div className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {lesson.exerciseFollowUp.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              )}

              {/* Important Notice Box */}
              {lesson.important && (
                <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-4 sm:p-5 text-amber-950 space-y-2">
                  <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Important</span>
                  </h3>
                  {typeof lesson.important === 'string' ? (
                    <p className="text-sm text-amber-900/90 leading-relaxed">
                      {lesson.important}
                    </p>
                  ) : (
                    <div className="space-y-2 text-sm text-amber-900/90 leading-relaxed">
                      {lesson.important.lead && (
                        <p className="font-semibold text-amber-950">{lesson.important.lead}</p>
                      )}
                      {lesson.important.items && lesson.important.items.length > 0 && (
                        <ul className="space-y-1.5 pl-1">
                          {lesson.important.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-amber-700 font-bold text-base leading-none mt-0.5">•</span>
                              <span className="font-medium text-amber-900">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {lesson.important.followUp && (
                        <p className="pt-1 whitespace-pre-line text-amber-900/90 leading-relaxed">
                          {lesson.important.followUp}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Lesson Resources / Exercise Files */}
              {lesson.resource && lesson.resource.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Downloadable materials
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {lesson.resource.map(([name, url], idx) => (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-xs transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg transition-colors ${
                              name.toLowerCase().includes('.csv')
                                ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                                : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
                            }`}
                          >
                            {name.toLowerCase().includes('.csv') ? (
                              <FileText className="w-5 h-5" />
                            ) : (
                              <FileSpreadsheet className="w-5 h-5" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                              {name}
                            </div>
                            <div className="text-xs text-slate-400">Course Practice File</div>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Support Guidance */}
              {lesson.support && (
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div>
                    <div className="text-sm font-semibold text-slate-800">
                      Official QuickFile Guidance
                    </div>
                    <div className="text-xs text-slate-500">
                      Read the complete documentation from the QuickFile Knowledge Base.
                    </div>
                  </div>
                  <a
                    href={lesson.support}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-white border border-slate-300 hover:border-blue-500 text-blue-600 text-xs font-semibold rounded-lg shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5"
                  >
                    Open Article <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          {/* Mark Complete Toggle */}
          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`cursor-pointer px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            {isCompleted
              ? lesson.isQuiz
                ? '✓ Quiz Completed'
                : '✓ Lesson Completed'
              : lesson.isQuiz
              ? 'Mark Quiz Complete'
              : 'Mark Lesson Complete'}
          </button>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            {lesson.id > 1 && onPrevLesson && (
              <button
                onClick={() => {
                  if (lesson.prev) {
                    onPrevLesson(lesson.prev);
                  } else {
                    onPrevLesson(lesson.id - 1);
                  }
                }}
                className="cursor-pointer px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 flex items-center gap-1.5 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
            )}

            {lesson.next && onNextLesson ? (
              <button
                onClick={() => onNextLesson(lesson.next!)}
                className="cursor-pointer px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xs flex items-center gap-1.5 transition-all"
              >
                {lesson.isQuiz
                  ? 'Next Lesson'
                  : lesson.next >= 21 && lesson.next <= 26
                  ? 'Start Section Quiz'
                  : 'Next Lesson'}
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onOpenAssessment();
                }}
                className="cursor-pointer px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 shadow-xs flex items-center gap-1.5 transition-all"
              >
                <Award className="w-4 h-4" />
                Final Assessment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
