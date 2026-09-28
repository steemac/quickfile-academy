import React, { useState, useMemo } from 'react';
import { Course } from '../types';
import {
  BookOpen,
  CheckCircle,
  Clock,
  Layers,
  Award,
  Search,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  FileSpreadsheet,
  Play,
  Filter,
} from 'lucide-react';
import { TrustpilotReviews } from './TrustpilotReviews';

interface CoursesHubProps {
  courses: Course[];
  onSelectCourse: (courseId: string) => void;
  getCourseProgress: (course: Course) => { completed: number; total: number; percentage: number };
}

export const CoursesHub: React.FC<CoursesHubProps> = ({
  courses,
  onSelectCourse,
  getCourseProgress,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === 'All' || course.level === selectedLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchQuery, selectedCategory, selectedLevel]);

  const categories = ['All', 'Core Bookkeeping', 'Advanced & Compliance'];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Academy Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#4b7ff5] via-[#3b82f6] to-[#25afe0] text-white pt-12 pb-24 lg:pt-16 lg:pb-28">
        {/* Ambient subtle light shapes */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Official badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide text-white">
            <GraduationCap className="w-4 h-4 text-blue-100" />
            <span>Official QuickFile Learning Portal</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-blue-100 font-normal">Free Self-Paced Courses</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Master QuickFile Accounting With Guided Online Courses
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-blue-50/95 max-w-3xl mx-auto font-normal leading-relaxed">
            Step-by-step video walkthroughs, downloadable exercise spreadsheets, and practical knowledge assessments. Built for small business owners, bookkeepers, and finance professionals.
          </p>

          {/* Value Stats Pills */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/95">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <BookOpen className="w-4 h-4 text-blue-200" />
              <span>{courses.length} Structured Courses</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Layers className="w-4 h-4 text-blue-200" />
              <span>
                {courses.reduce((acc, c) => acc + (c.lessonsCount || Object.keys(c.lessons).length), 0)}+ Practical Lessons
              </span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>End-of-Course Assessments</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-4 h-4 text-emerald-300" />
              <span>100% Free & Practical</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Directory Section */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search & Filter Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, topics, or lessons..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4b7ff5] focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#4b7ff5] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Selector */}
            <div className="flex items-center gap-1.5 w-full md:w-auto justify-end">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                aria-label="Filter by course level"
                className="bg-slate-50 border border-slate-200 rounded-lg text-xs sm:text-sm font-semibold py-1.5 px-3 text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#4b7ff5] cursor-pointer"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4b7ff5]">
              QuickFile Academy Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Available Courses ({filteredCourses.length})
            </h2>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-medium hidden sm:inline">
            Click any course to view full curriculum & lessons
          </span>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const progress = getCourseProgress(course);
            const isStarted = progress.completed > 0;
            const isFinished = progress.completed === progress.total;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#4b7ff5]/60"
              >
                <div>
                  {/* Card Visual Header with QuickFile Brand Gradient */}
                  <div
                    className={`relative p-6 sm:p-7 bg-gradient-to-r ${course.gradient || 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]'} text-white overflow-hidden h-[260px] sm:h-[270px] flex flex-col justify-between`}
                  >
                    {/* Background glow decoration */}
                    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      {/* Badges row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm border border-white/25 text-white tracking-wide uppercase">
                          Course {course.number}
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-400/30 border border-emerald-300/40 text-white backdrop-blur-sm">
                            {course.level}
                          </span>
                          {course.inDevelopment && (
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/30 border border-amber-300/40 text-amber-100 backdrop-blur-sm flex items-center gap-1">
                              <Clock className="w-3 h-3 text-amber-200" />
                              In Development
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Subtitle block with uniform heights */}
                      <div className="space-y-1.5 my-auto">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug line-clamp-2 h-14 sm:h-16 flex items-center">
                          {course.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-blue-50/90 font-medium leading-relaxed line-clamp-2 h-9 sm:h-10 flex items-start">
                          {course.subtitle}
                        </p>
                      </div>

                      {/* Meta stats row */}
                      <div className="flex flex-wrap items-center gap-3.5 text-xs font-semibold text-white/90 pt-2 border-t border-white/15">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-200" />
                          {course.sectionsCount} Sections
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-blue-200" />
                          {course.lessonsCount} Lessons
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-blue-200" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course Body Description & Topics */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed min-h-[4.5rem] line-clamp-3">
                      {course.description}
                    </p>

                    {/* Key Topics Tags */}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Key Topics Covered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.topics.slice(0, 5).map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200/70"
                          >
                            {topic}
                          </span>
                        ))}
                        {course.topics.length > 5 && (
                          <span className="px-2.5 py-1 bg-blue-50 text-[#4b7ff5] rounded-md text-xs font-semibold border border-blue-100">
                            +{course.topics.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar (if user has started) */}
                    <div className="pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-slate-500">Your Progress</span>
                        <span
                          className={
                            isFinished
                              ? 'text-emerald-600 font-bold'
                              : isStarted
                              ? 'text-[#4b7ff5] font-bold'
                              : 'text-slate-400'
                          }
                        >
                          {progress.completed} of {progress.total} lessons ({progress.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 rounded-full ${
                            isFinished
                              ? 'bg-emerald-500'
                              : isStarted
                              ? 'bg-[#4b7ff5]'
                              : 'bg-slate-300'
                          }`}
                          style={{ width: `${progress.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 sm:px-7 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 font-medium">
                    {course.inDevelopment ? (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600" />
                        In Development • Coming Soon
                      </span>
                    ) : (
                      `${course.category} • Free Access`
                    )}
                  </div>

                  {course.inDevelopment ? (
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
                    >
                      <span>Preview Curriculum</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#4b7ff5] hover:bg-[#3b70e6] text-white font-bold text-sm shadow-xs hover:shadow-md transition-all cursor-pointer group-hover:bg-[#3b70e6] active:scale-95"
                    >
                      <span>
                        {isFinished
                          ? 'Review Course'
                          : isStarted
                          ? 'Continue Course'
                          : 'View Course & Curriculum'}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {/* Upcoming Additional Course Card - Illustrates scalability */}
          <div className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border-2 border-dashed border-slate-300 p-8 flex flex-col justify-between items-center text-center space-y-6">
            <div className="p-4 bg-blue-50 text-[#4b7ff5] rounded-2xl mt-4">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200 text-slate-600">
                Future Course • Planned Curriculum
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                QuickFile Payroll & Making Tax Digital
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Covering employee PAYE, RTI submissions to HMRC, pension auto-enrolment, and direct payroll journal integration.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                PAYE & National Insurance
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                Pension Schemes
              </span>
              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium">
                HMRC RTI Submissions
              </span>
            </div>

            <div className="text-xs font-semibold text-slate-400 pb-2">
              Planned for future release
            </div>
          </div>
        </div>

        {/* Empty state if search doesn't match */}
        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
            <Search className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your filter</h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              Try adjusting your search query or reset the level and category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLevel('All');
              }}
              className="px-4 py-2 bg-[#4b7ff5] text-white rounded-lg text-sm font-semibold cursor-pointer hover:bg-blue-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Why Choose QuickFile Academy - Corporate Features Ribbon */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4b7ff5]">
              The QuickFile Learning Method
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Learn With QuickFile Academy?
            </h2>
            <p className="text-base text-slate-600">
              Designed around realistic UK business workflows so you can put what you learn into immediate practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#4b7ff5] flex items-center justify-center">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Step-by-Step Video Guides</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear, concise walkthroughs showing real QuickFile screens, settings, and workflows without unnecessary fluff.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hands-on Exercises</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Download realistic spreadsheets and bank statement CSV files to practice invoicing, purchases, and reconciliations.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Best-Practice Bookkeeping</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how to structure accounts correctly so that VAT returns, year-end adjustments, and accountant audits run smoothly.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Knowledge Checks</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Assess your learning with section quizzes and a final end-of-course test (80%+ pass mark) covering realistic bookkeeping workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Social Proof */}
      <TrustpilotReviews />

      {/* Academy FAQ Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4b7ff5]">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-base font-bold text-slate-900">Are these courses completely free?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Yes. All QuickFile Academy courses, video walkthroughs, downloadable exercise files, and knowledge assessments are 100% free of charge.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-base font-bold text-slate-900">Do I need a live QuickFile account?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You can sign up for a free QuickFile account to follow along with the exercises, or simply watch the video lessons and complete the knowledge checks.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-base font-bold text-slate-900">How do knowledge checks work?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Each course includes regular section quizzes and a comprehensive final assessment. Scoring 80% or higher lets you confirm your confidence in everyday bookkeeping workflows.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <h3 className="text-base font-bold text-slate-900">Can I switch between courses?</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Absolutely. Your progress is saved locally for each course so you can return to the course catalog and pick up right where you left off.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
