import React from 'react';
import { ALL_RESOURCES } from '../data/courseData';
import { CourseResource } from '../types';
import { FileSpreadsheet, ExternalLink, ArrowLeft, FileText } from 'lucide-react';

interface ResourcesViewProps {
  onBackToCourse: () => void;
  onSelectLesson: (lessonId: number) => void;
  courseTitle?: string;
  resources?: CourseResource[];
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onBackToCourse,
  onSelectLesson,
  courseTitle = 'QuickFile Essentials',
  resources,
}) => {
  const displayResources =
    resources && resources.length > 0
      ? resources
      : ALL_RESOURCES.map((r, i) => ({
          id: i + 1,
          title: r.name,
          url: r.url,
          size: '15 kB',
          type: r.type,
          lesson: r.lesson,
        }));

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <button
          onClick={onBackToCourse}
          className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Course Content
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
            {courseTitle} Training Package
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
            Course Training Files & Resources
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            The exercise spreadsheets, CSV files, and references supplied for {courseTitle}. Download or open them to complete the practical tasks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                  {res.type === 'Spreadsheet' ? (
                    <FileSpreadsheet className="w-6 h-6" />
                  ) : (
                    <FileText className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Lesson {res.lesson}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {res.type}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mt-1">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Official exercise material for practical tasks.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectLesson(res.lesson)}
                  className="cursor-pointer text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  View Lesson {res.lesson} →
                </button>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
                >
                  Open File <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
