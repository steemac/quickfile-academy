import React, { useState, useEffect, useCallback } from 'react';
import { Course } from './types';
import { COURSES, getCourseById } from './data/coursesCatalog';
import { Navbar } from './components/Navbar';
import { CoursesHub } from './components/CoursesHub';
import { Hero } from './components/Hero';
import { TrustpilotReviews } from './components/TrustpilotReviews';
import { FeaturesRibbon } from './components/FeaturesRibbon';
import { CourseOverview } from './components/CourseOverview';
import { CourseContentSection } from './components/CourseContentSection';
import { LessonModal } from './components/LessonModal';
import { AssessmentView } from './components/AssessmentView';
import { ResourcesView } from './components/ResourcesView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'hub' | 'course'>('hub');
  const [activeCourseId, setActiveCourseId] = useState<string>('basics');
  const [activeTab, setActiveTab] = useState<'training' | 'assessment' | 'resources'>('training');
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);

  // Per-course completion records: { [storageKey: string]: number[] }
  const [completedMap, setCompletedMap] = useState<Record<string, number[]>>({});

  const activeCourse = getCourseById(activeCourseId);

  // Load completed lessons for all courses from localStorage
  useEffect(() => {
    try {
      const initialMap: Record<string, number[]> = {};
      COURSES.forEach((c) => {
        const stored = localStorage.getItem(c.storageKey);
        if (stored) {
          try {
            initialMap[c.storageKey] = JSON.parse(stored);
          } catch {
            initialMap[c.storageKey] = [];
          }
        } else {
          initialMap[c.storageKey] = [];
        }
      });
      setCompletedMap(initialMap);
    } catch {
      // ignore
    }
  }, []);

  const getCourseProgress = useCallback(
    (course: Course) => {
      const completed = completedMap[course.storageKey] || [];
      const total = course.lessonsCount;
      const percentage = total > 0 ? Math.round((completed.length / total) * 100) : 0;
      return {
        completed: completed.length,
        total,
        percentage,
      };
    },
    [completedMap]
  );

  const toggleComplete = (id: number) => {
    const key = activeCourse.storageKey;
    setCompletedMap((prev) => {
      const currentList = prev[key] || [];
      const updated = currentList.includes(id)
        ? currentList.filter((x) => x !== id)
        : [...currentList, id];

      try {
        localStorage.setItem(key, JSON.stringify(updated));
      } catch {
        // ignore
      }

      return {
        ...prev,
        [key]: updated,
      };
    });
  };

  const handleSelectCourse = (courseId: string) => {
    setActiveCourseId(courseId);
    setCurrentView('course');
    setActiveTab('training');
    setSelectedLessonId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHub = () => {
    setCurrentView('hub');
    setSelectedLessonId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartCourse = () => {
    const firstLessonId = activeCourse.sections[0]?.lessons[0] || 1;
    setSelectedLessonId(firstLessonId);
  };

  const handleScrollToContent = () => {
    setActiveTab('training');
    setTimeout(() => {
      const el = document.getElementById('course-content');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenAssessment = () => {
    setSelectedLessonId(null);
    setActiveTab('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentCompletedLessons = completedMap[activeCourse.storageKey] || [];
  const currentLesson = selectedLessonId ? activeCourse.lessons[selectedLessonId] : null;
  const currentSection = selectedLessonId
    ? activeCourse.sections.find((s) => s.lessons.includes(selectedLessonId)) || null
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        activeCourse={activeCourse}
        activeTab={activeTab}
        onNavigateHub={handleNavigateHub}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onSelectCourse={handleSelectCourse}
        courses={COURSES}
        completedCount={currentCompletedLessons.length}
        totalLessons={activeCourse.lessonsCount}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {currentView === 'hub' ? (
          <CoursesHub
            courses={COURSES}
            onSelectCourse={handleSelectCourse}
            getCourseProgress={getCourseProgress}
          />
        ) : (
          <>
            {activeTab === 'training' && (
              <>
                <Hero
                  course={activeCourse}
                  onStartCourse={handleStartCourse}
                  onScrollToContent={handleScrollToContent}
                  onBackToCatalog={handleNavigateHub}
                />
                <TrustpilotReviews />
                <FeaturesRibbon />
                <CourseOverview
                  course={activeCourse}
                  onScrollToCurriculum={handleScrollToContent}
                />
                <CourseContentSection
                  sections={activeCourse.sections}
                  lessons={activeCourse.lessons}
                  onSelectLesson={(id) => setSelectedLessonId(id)}
                  completedLessons={currentCompletedLessons}
                  inDevelopment={activeCourse.inDevelopment}
                />
              </>
            )}

            {activeTab === 'assessment' && (
              <AssessmentView
                courseTitle={activeCourse.title}
                courseBadge={`${activeCourse.badge} Assessment`}
                questions={activeCourse.quizQuestions}
                practicalChecks={activeCourse.practicalChecks}
                onBackToCourse={() => {
                  setActiveTab('training');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onPassAssessment={() => {
                  const lastLessonId =
                    activeCourse.sections[activeCourse.sections.length - 1]?.lessons.slice(-1)[0];
                  if (lastLessonId && !currentCompletedLessons.includes(lastLessonId)) {
                    toggleComplete(lastLessonId);
                  }
                }}
              />
            )}

            {activeTab === 'resources' && (
              <ResourcesView
                courseTitle={activeCourse.title}
                resources={activeCourse.resources}
                onBackToCourse={() => {
                  setActiveTab('training');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSelectLesson={(lessonId) => {
                  setActiveTab('training');
                  setSelectedLessonId(lessonId);
                }}
              />
            )}
          </>
        )}
      </div>

      {/* Lesson Viewer Modal */}
      {selectedLessonId && currentLesson && (
        <LessonModal
          lesson={currentLesson}
          section={currentSection}
          onClose={() => setSelectedLessonId(null)}
          onNextLesson={(nextId) => setSelectedLessonId(nextId)}
          onPrevLesson={(prevId) => setSelectedLessonId(prevId)}
          isCompleted={currentCompletedLessons.includes(selectedLessonId)}
          onToggleComplete={toggleComplete}
          onOpenAssessment={handleOpenAssessment}
        />
      )}

      {/* Footer */}
      <Footer
        courseTitle={currentView === 'course' ? activeCourse.title : undefined}
        onNavigateHub={currentView === 'course' ? handleNavigateHub : undefined}
        onSelectTab={(tab) => {
          if (currentView === 'hub') {
            handleSelectCourse('basics');
            setActiveTab(tab);
          } else {
            setActiveTab(tab);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
