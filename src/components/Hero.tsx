import React from 'react';
import { Play, ChevronRight, FileText, Calendar, Pin, ArrowLeft, Clock } from 'lucide-react';
import { QuickFileLogo } from './QuickFileLogo';
import { Course } from '../types';

interface HeroProps {
  course?: Course;
  onStartCourse: () => void;
  onScrollToContent: () => void;
  onBackToCatalog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  course,
  onStartCourse,
  onScrollToContent,
  onBackToCatalog,
}) => {
  const gradientClass = course?.gradient
    ? `from-${course.gradient.split(' ')[0]} via-${course.gradient.split(' ')[1] || '#3d8ef0'} to-${course.gradient.split(' ')[2] || '#25afe0'}`
    : 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]';

  return (
    <section className={`relative overflow-hidden bg-gradient-to-r ${course?.gradient || 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]'} text-white pt-8 pb-28 lg:pt-10 lg:pb-36 select-none`}>
      {/* Ambient background glow and soft wave circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-[#25afe0]/20 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {onBackToCatalog && (
          <div className="mb-5">
            <button
              onClick={onBackToCatalog}
              className="cursor-pointer inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 hover:text-white bg-white/15 hover:bg-white/25 px-3.5 py-1.5 rounded-full border border-white/20 transition-all backdrop-blur-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Course Catalog</span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-white/95 bg-white/15 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/25 shadow-xs">
                {course?.number ? `Course ${course.number} • ${course.badge}` : course?.badge || 'Customer Training'}
              </span>
              {course?.inDevelopment && (
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-100 bg-amber-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-amber-300/40 shadow-xs flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-200" />
                  In Development
                </span>
              )}
            </div>

            {/* QuickFile authentic italic title typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-normal italic tracking-tight text-white leading-tight">
              {course?.title || 'QuickFile Essentials'}
            </h1>

            {/* Characteristic Simple, Fast, Intuitive tags matching image.png */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="px-3.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-medium">
                Simple
              </span>
              <span className="px-3.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-medium">
                Fast
              </span>
              <span className="px-3.5 py-1 rounded bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-medium">
                Intuitive
              </span>
            </div>

            <p className="text-xl sm:text-2xl text-white/95 font-medium leading-snug max-w-xl">
              {course?.subtitle || 'Learn the basics, build your confidence and get the most from QuickFile.'}
            </p>

            <p className="text-base sm:text-[17px] text-blue-50/90 leading-relaxed max-w-xl font-normal">
              {course?.description || 'A free, step-by-step video course for QuickFile customers. Covering everything you need to set up, use and manage your account with confidence.'}
            </p>

            {/* In Development Notice */}
            {course?.inDevelopment && (
              <div className="p-4 rounded-xl bg-amber-500/25 border border-amber-300/40 backdrop-blur-sm text-white space-y-1 max-w-xl">
                <div className="flex items-center gap-2 text-amber-200 font-bold text-sm">
                  <Clock className="w-4 h-4" />
                  <span>Course Under Development</span>
                </div>
                <p className="text-xs text-blue-50/95 leading-relaxed">
                  This course is currently being prepared. You can explore the planned curriculum structure and learning objectives below while video walkthroughs and interactive resources are being finalised.
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {course?.inDevelopment ? (
                <button
                  onClick={onScrollToContent}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-amber-700 font-bold text-base shadow-lg shadow-blue-950/20 hover:bg-amber-50 hover:shadow-xl transition-all transform active:scale-95"
                >
                  <Clock className="w-4 h-4 text-amber-600" />
                  Preview Planned Curriculum
                </button>
              ) : (
                <>
                  <button
                    onClick={onStartCourse}
                    className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white text-[#4b7ff5] font-bold text-base shadow-lg shadow-blue-950/20 hover:bg-blue-50 hover:shadow-xl transition-all transform active:scale-95"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#4b7ff5] text-white text-xs">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </span>
                    Start the Course
                  </button>

                  <button
                    onClick={onScrollToContent}
                    className="cursor-pointer inline-flex items-center justify-center px-6 py-3.5 rounded-lg border-2 border-white/80 text-white font-semibold text-base hover:bg-white/15 hover:border-white transition-all active:scale-95 backdrop-blur-xs"
                  >
                    View Course Content
                  </button>
                </>
              )}
            </div>

            {/* MTD Ready banner matching image.png */}
            <div className="pt-2 flex items-center gap-3 text-xs text-white/90">
              <div className="border border-white/35 rounded px-2 py-1 bg-white/10 shrink-0 text-center">
                <div className="font-bold text-[10px] uppercase tracking-wider">MTD ready</div>
                <div className="text-[8px] opacity-85">Recognised by HMRC</div>
              </div>
              <span className="leading-tight text-white/90">
                Making Tax Digital (MTD) compliant bookkeeping & accounting workflows.
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Device Mockup matching image.png */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] animate-float-device">
              {/* DESKTOP DASHBOARD MOCKUP (SOLANO DIGITAL LTD) */}
              <div className="relative ml-auto w-[92%] sm:w-[95%] bg-white rounded-xl shadow-2xl shadow-blue-950/40 border border-white/30 overflow-hidden text-slate-800 select-none font-sans">
                {/* Solano Blue Header */}
                <div className="bg-[#4b7ff5] text-white px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QuickFileLogo className="h-4.5 w-auto" variant="white" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wide">
                    <span>
                      {course?.id === 'basics'
                        ? 'BRIGHTSIDE WEB DESIGN LTD'
                        : course?.id === 'advanced'
                        ? 'VERTEX CONSULTING GROUP LTD'
                        : 'SOLANO DIGITAL LTD'}
                    </span>
                    <span className="text-base leading-none">☰</span>
                  </div>
                </div>

                {/* Dashboard Inner Content */}
                <div className="p-3 bg-slate-50 space-y-2.5 text-xs">
                  {/* Top Row: Owed / You Owe + Monthly Bar Chart */}
                  <div className="bg-white rounded-lg p-3 border border-slate-200 shadow-2xs grid grid-cols-12 gap-3 items-center">
                    <div className="col-span-4 border-r border-slate-200 pr-3 space-y-2">
                      <div>
                        <div className="text-[10px] text-slate-500 font-medium">Owed to you</div>
                        <div className="text-lg sm:text-xl font-bold text-emerald-600">£2,774</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 font-medium">You owe</div>
                        <div className="text-lg sm:text-xl font-bold text-red-600">£1,381</div>
                      </div>
                    </div>

                    {/* 12 Months Bar Chart */}
                    <div className="col-span-8 pl-1">
                      <div className="h-16 flex items-end justify-between gap-1 pt-2">
                        {[
                          { m: 'JAN', h: 65 },
                          { m: 'FEB', h: 72 },
                          { m: 'MAR', h: 80 },
                          { m: 'APR', h: 68 },
                          { m: 'MAY', h: 75 },
                          { m: 'JUN', h: 62 },
                          { m: 'JUL', h: 78 },
                          { m: 'AUG', h: 85 },
                          { m: 'SEP', h: 90 },
                          { m: 'OCT', h: 70 },
                          { m: 'NOV', h: 82 },
                          { m: 'DEC', h: 94 },
                        ].map((b, i) => (
                          <div key={b.m} className="flex-1 flex flex-col items-center h-full justify-end">
                            <div
                              className="w-full bg-[#4b7ff5] rounded-t-xs"
                              style={{ height: `${b.h}%` }}
                            />
                            <span className="text-[7px] text-slate-400 mt-1 scale-90 font-medium">
                              {b.m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Current Account & Credit Card Chart + Pinboard */}
                  <div className="grid grid-cols-12 gap-2.5">
                    {/* Bank Feeds Area Chart */}
                    <div className="col-span-7 bg-white rounded-lg p-2.5 border border-slate-200 shadow-2xs space-y-1">
                      <div className="flex justify-between items-baseline text-[9px]">
                        <div>
                          <span className="font-bold text-slate-800">Current Account</span>
                          <span className="text-slate-400 block text-[8px]">Balance: £35,781</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-slate-800">Credit Card</span>
                          <span className="text-slate-400 block text-[8px]">Balance: -£3,321</span>
                        </div>
                      </div>

                      {/* Visual Area Trend */}
                      <div className="h-14 relative w-full pt-1">
                        <svg viewBox="0 0 160 40" className="w-full h-full" preserveAspectRatio="none">
                          <path
                            d="M 0,22 Q 25,12 50,18 T 100,10 T 140,16 L 160,12 L 160,25 L 0,25 Z"
                            fill="#93c5fd"
                            opacity="0.6"
                          />
                          <path
                            d="M 0,25 L 160,25 L 160,34 Q 130,38 90,30 T 40,36 L 0,34 Z"
                            fill="#fca5a5"
                            opacity="0.6"
                          />
                          <line x1="0" y1="25" x2="160" y2="25" stroke="#cbd5e1" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>

                    {/* Pinboard */}
                    <div className="col-span-5 bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden text-[9px] flex flex-col justify-between">
                      <div className="bg-slate-100 px-2 py-1 font-bold text-slate-700 flex items-center gap-1 border-b border-slate-200">
                        <Pin className="w-3 h-3 text-[#4b7ff5]" />
                        <span>Pinboard</span>
                      </div>
                      <div className="p-2 space-y-1.5">
                        <div className="flex items-center gap-1 text-slate-600">
                          <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">Accounts due next week</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-600">
                          <FileText className="w-3 h-3 text-slate-400 shrink-0" />
                          <span className="truncate">6 untagged receipts</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 px-2 py-1 text-slate-500 text-center border-t border-slate-100 text-[8px] font-medium">
                        ▾ 3 more notifications
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMARTPHONE MOCKUP in foreground on the left, directly matching image.png */}
              <div className="absolute -bottom-6 -left-3 sm:-left-5 w-[155px] sm:w-[180px] bg-slate-900 p-2 rounded-[26px] border-2 border-slate-800 shadow-2xl shadow-slate-950/80 z-20">
                {/* Speaker Notch */}
                <div className="w-14 h-2.5 bg-slate-950 rounded-full mx-auto mb-1.5 flex items-center justify-center">
                  <div className="w-2.5 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Phone Screen */}
                <div className="bg-white rounded-[18px] overflow-hidden text-slate-800 p-2.5 text-[10px] space-y-2 shadow-inner">
                  {/* Phone Header with QuickFile Logo & Hamburger */}
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <QuickFileLogo className="h-3.5 w-auto" variant="blue" />
                    <span className="text-slate-600 font-bold text-xs">☰</span>
                  </div>

                  {/* SALES & PURCHASES Box with accent colored left border */}
                  <div className="bg-slate-50 rounded border border-slate-100 p-1.5 space-y-1 text-[9px]">
                    <div className="flex justify-between items-center border-l-2 border-emerald-500 pl-1">
                      <span className="font-semibold text-slate-600">SALES</span>
                      <span className="font-bold text-emerald-600">£2,774</span>
                    </div>
                    <div className="flex justify-between items-center border-l-2 border-red-500 pl-1">
                      <span className="font-semibold text-slate-600">PURCHASES</span>
                      <span className="font-bold text-red-600">£1,381</span>
                    </div>
                  </div>

                  {/* Current Account */}
                  <div className="bg-slate-50 p-1.5 rounded border border-slate-100 border-l-2 border-l-emerald-500">
                    <div className="flex justify-between items-center text-[8.5px] text-slate-600 font-medium">
                      <span>Current Account</span>
                      <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                    </div>
                    <div className="text-[8px] text-slate-400 mt-0.5">
                      Balance <span className="font-bold text-slate-800">£35,781</span>
                    </div>
                  </div>

                  {/* Untagged Receipts with circle badge */}
                  <div className="pt-0.5 space-y-1">
                    <div className="flex items-center justify-between text-[8px]">
                      <span className="font-semibold text-slate-700">Untagged Receipts</span>
                      <span className="w-4 h-4 rounded-full bg-slate-400 text-white text-[8px] flex items-center justify-center font-bold">
                        6
                      </span>
                    </div>
                    <div className="text-[7.5px] text-slate-500 truncate flex items-center gap-1">
                      <FileText className="w-2 h-2 text-slate-400 shrink-0" />
                      stationery-order.pdf
                    </div>
                    <div className="text-[7.5px] text-slate-500 truncate flex items-center gap-1">
                      <FileText className="w-2 h-2 text-slate-400 shrink-0" />
                      18_09_2026_scan.pdf
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICKFILE MULTI-LAYER ANIMATED FLOWING WAVES */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <div className="relative h-20 sm:h-28 lg:h-36 w-full">
          {/* Back Wave Layer - Deep Cyan Accent */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow opacity-30"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,35 C 150,75 350,5 600,35 C 850,75 1050,5 1200,35 L 1200,120 L 0,120 Z"
              fill="#25afe0"
            />
          </svg>

          {/* Middle Wave Layer - Soft Translucent White */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-wave-medium opacity-40"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,55 C 200,15 400,95 600,55 C 800,15 1000,95 1200,55 L 1200,120 L 0,120 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Foreground Wave Layer - Blends into #f8fafc slate background */}
          <svg
            className="absolute -bottom-0.5 left-0 w-[200%] h-full animate-wave-fast text-[#f8fafc]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,60 C 180,95 380,25 600,60 C 820,95 1020,25 1200,60 L 1200,120 L 0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
