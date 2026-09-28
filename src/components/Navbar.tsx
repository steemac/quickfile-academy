import React, { useState } from 'react';
import { QuickFileLogo } from './QuickFileLogo';
import {
  User,
  Menu,
  X,
  CheckCircle,
  Award,
  FileSpreadsheet,
  Youtube,
  BookOpen,
  ArrowLeft,
  ChevronDown,
} from 'lucide-react';
import { Course } from '../types';

interface NavbarProps {
  currentView: 'hub' | 'course';
  activeCourse?: Course;
  activeTab: 'training' | 'assessment' | 'resources';
  onNavigateHub: () => void;
  onSelectTab: (tab: 'training' | 'assessment' | 'resources') => void;
  onSelectCourse?: (courseId: string) => void;
  courses?: Course[];
  completedCount?: number;
  totalLessons?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  activeCourse,
  activeTab,
  onNavigateHub,
  onSelectTab,
  onSelectCourse,
  courses = [],
  completedCount = 0,
  totalLessons = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onNavigateHub();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center text-left focus:outline-hidden hover:opacity-90 transition-opacity cursor-pointer"
            title="QuickFile Academy - All Courses"
          >
            <QuickFileLogo className="h-8 sm:h-9 w-auto" variant="blue" />
          </button>

          <span className="hidden md:inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100/80">
            Academy
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-slate-700">
          {/* All Courses / Hub Link */}
          <button
            onClick={() => {
              onNavigateHub();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`cursor-pointer transition-colors focus:outline-hidden py-2 flex items-center gap-1.5 ${
              currentView === 'hub'
                ? 'text-[#4b7ff5] font-bold border-b-2 border-[#4b7ff5]'
                : 'text-slate-600 hover:text-[#4b7ff5]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            All Courses
          </button>

          {/* When inside a course: Course Selector Dropdown & Course Tabs */}
          {currentView === 'course' && activeCourse && (
            <>
              {/* Course Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors"
                >
                  <span className="truncate max-w-[170px]">
                    Course {activeCourse.number}: {activeCourse.title}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </button>

                {courseDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                    <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Switch Course
                    </div>
                    {courses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          if (onSelectCourse) onSelectCourse(c.id);
                          setCourseDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2.5 text-sm flex items-start gap-2 hover:bg-slate-50 cursor-pointer ${
                          c.id === activeCourse.id
                            ? 'bg-blue-50/70 text-[#4b7ff5] font-bold'
                            : 'text-slate-700'
                        }`}
                      >
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {c.number}
                        </span>
                        <div>
                          <div className="leading-tight">{c.title}</div>
                          <div className="text-[11px] text-slate-400 font-normal mt-0.5">
                            {c.lessonsCount} lessons • {c.duration}
                          </div>
                        </div>
                      </button>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1 px-3">
                      <button
                        onClick={() => {
                          onNavigateHub();
                          setCourseDropdownOpen(false);
                        }}
                        className="w-full text-left py-1.5 text-xs text-[#4b7ff5] font-semibold hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3 h-3" /> Back to All Courses
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Course Training tab */}
              <button
                onClick={() => {
                  onSelectTab('training');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`cursor-pointer transition-colors focus:outline-hidden py-2 ${
                  activeTab === 'training'
                    ? 'text-[#4b7ff5] font-bold border-b-2 border-[#4b7ff5]'
                    : 'text-slate-600 hover:text-[#4b7ff5]'
                }`}
              >
                Curriculum
              </button>

              {/* Course Assessment tab */}
              <button
                onClick={() => {
                  onSelectTab('assessment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2 font-medium transition-colors focus:outline-hidden cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'assessment'
                    ? 'text-[#4b7ff5] font-bold border-b-2 border-[#4b7ff5]'
                    : 'text-slate-600 hover:text-[#4b7ff5]'
                }`}
              >
                <Award className="w-4 h-4 text-amber-500" />
                Assessment
              </button>

              {/* Course Resources tab */}
              <button
                onClick={() => {
                  onSelectTab('resources');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`py-2 font-medium transition-colors focus:outline-hidden cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'resources'
                    ? 'text-[#4b7ff5] font-bold border-b-2 border-[#4b7ff5]'
                    : 'text-slate-600 hover:text-[#4b7ff5]'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                Resources
              </button>
            </>
          )}

          <a
            href="https://support.quickfile.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-[#4b7ff5] transition-colors py-2"
          >
            Support
          </a>

          <a
            href="https://community.quickfile.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-[#4b7ff5] transition-colors py-2"
          >
            Community
          </a>

          <a
            href="https://www.youtube.com/@QuickFileHelpGuides/videos"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-[#4b7ff5] transition-colors py-2 flex items-center gap-1.5"
            title="QuickFile Video Guides on YouTube"
          >
            <Youtube className="w-4 h-4 text-red-600" />
            YouTube
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Progress Pill if in course */}
          {currentView === 'course' && totalLessons > 0 && (
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full text-xs font-semibold text-[#4b7ff5]">
              <CheckCircle className="w-3.5 h-3.5 text-[#4b7ff5]" />
              <span>
                {completedCount} of {totalLessons} done
              </span>
            </div>
          )}

          <a
            href="https://www.quickfile.co.uk/register"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 min-w-[110px] text-center whitespace-nowrap text-sm font-bold text-white bg-[#4b7ff5] hover:bg-[#3b70e6] rounded-md transition-all shadow-xs inline-flex items-center justify-center active:scale-95"
          >
            Sign Up
          </a>

          <a
            href="https://www.quickfile.co.uk/login"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 min-w-[110px] text-center whitespace-nowrap text-sm font-bold text-white bg-[#4b7ff5] hover:bg-[#3b70e6] rounded-md transition-all inline-flex items-center justify-center gap-2 shadow-xs active:scale-95"
          >
            <User className="w-4 h-4 shrink-0" />
            Log In
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-[#4b7ff5] focus:outline-hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                onNavigateHub();
                setMobileMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-md font-medium text-sm flex items-center gap-2 ${
                currentView === 'hub' ? 'bg-blue-50 text-[#4b7ff5] font-bold' : 'text-slate-700'
              }`}
            >
              <BookOpen className="w-4 h-4" /> All Courses Directory
            </button>

            {currentView === 'course' && activeCourse && (
              <>
                <div className="pt-2 pb-1 px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Course {activeCourse.number}: {activeCourse.title}
                </div>

                <button
                  onClick={() => {
                    onSelectTab('training');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md font-medium text-sm ${
                    activeTab === 'training' ? 'bg-blue-50 text-[#4b7ff5] font-bold' : 'text-slate-700'
                  }`}
                >
                  Curriculum & Lessons
                </button>

                <button
                  onClick={() => {
                    onSelectTab('assessment');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md font-medium text-sm flex items-center gap-2 ${
                    activeTab === 'assessment' ? 'bg-blue-50 text-[#4b7ff5] font-bold' : 'text-slate-700'
                  }`}
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  Assessment
                </button>

                <button
                  onClick={() => {
                    onSelectTab('resources');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-md font-medium text-sm flex items-center gap-2 ${
                    activeTab === 'resources' ? 'bg-blue-50 text-[#4b7ff5] font-bold' : 'text-slate-700'
                  }`}
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-500" />
                  Training Files & Downloads
                </button>
              </>
            )}

            <div className="border-t border-slate-100 my-2 pt-2" />

            <a
              href="https://support.quickfile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-left px-3 py-2 rounded-md font-medium text-sm text-slate-700 hover:text-[#4b7ff5]"
            >
              Support Knowledgebase
            </a>

            <a
              href="https://community.quickfile.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-left px-3 py-2 rounded-md font-medium text-sm text-slate-700 hover:text-[#4b7ff5]"
            >
              Community Forum
            </a>

            <a
              href="https://www.youtube.com/@QuickFileHelpGuides/videos"
              target="_blank"
              rel="noreferrer"
              className="text-left px-3 py-2 rounded-md font-medium text-sm text-slate-700 hover:text-[#4b7ff5] flex items-center gap-2"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              YouTube Guides
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://www.quickfile.co.uk/register"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#4b7ff5] rounded-md"
            >
              Sign Up Free
            </a>

            <a
              href="https://www.quickfile.co.uk/login"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#4b7ff5] rounded-md flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4" />
              Log In
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
