import React, { useState } from 'react';
import { QUIZ_QUESTIONS, PRACTICAL_CHECKS } from '../data/courseData';
import { PracticalCheck } from '../types';
import { Award, CheckCircle, AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';

interface AssessmentViewProps {
  onBackToCourse: () => void;
  onPassAssessment: () => void;
  courseTitle?: string;
  courseBadge?: string;
  questions?: { question: string; options: string[]; correctIndex: number }[];
  practicalChecks?: PracticalCheck[];
}

export const AssessmentView: React.FC<AssessmentViewProps> = ({
  onBackToCourse,
  onPassAssessment,
  courseTitle = 'QuickFile Essentials',
  courseBadge = 'QuickFile Essentials Assessment',
  questions = QUIZ_QUESTIONS,
  practicalChecks = PRACTICAL_CHECKS,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [practicalCompleted, setPracticalCompleted] = useState<Record<number, boolean>>({});

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const total = questions.length;
  const score = calculateScore();
  const percentage = Math.round((score / total) * 100);
  const isPassed = percentage >= 80;

  const handleSubmit = () => {
    setSubmitted(true);
    if (percentage >= 80) {
      onPassAssessment();
    }
    const resultElement = document.getElementById('assessment-result');
    if (resultElement) {
      resultElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const togglePractical = (id: number) => {
    setPracticalCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-10 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <button
          onClick={onBackToCourse}
          className="cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-6 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Course Content
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center gap-3 text-amber-500 font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4" />
            {courseBadge}
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
            {courseTitle} Assessment
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            {questions.length} knowledge questions plus practical checks • Pass mark 80%
          </p>

          <div className="mt-4 p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600 text-sm text-blue-900">
            This page includes a browser-based knowledge check built from the course material. The practical tasks should be completed in your QuickFile training account.
          </div>
        </div>

        {/* Knowledge Check Questions */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900">
            Part 1: Knowledge Check ({questions.length} Questions)
          </h2>

          {questions.map((q, qIdx) => {
            const chosen = selectedAnswers[qIdx];
            const isCorrect = submitted && chosen === q.correctIndex;
            const isIncorrect = submitted && chosen !== undefined && chosen !== q.correctIndex;

            return (
              <div
                key={qIdx}
                className={`bg-white rounded-xl border p-5 sm:p-6 shadow-2xs transition-all ${
                  submitted
                    ? isCorrect
                      ? 'border-emerald-300 bg-emerald-50/20'
                      : isIncorrect
                      ? 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    <span className="text-blue-600 font-bold mr-2">{qIdx + 1}.</span>
                    {q.question}
                  </h3>
                  {submitted && (
                    <div className="shrink-0">
                      {isCorrect ? (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Correct
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                          Incorrect
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-4 space-y-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosen === optIdx;
                    let optionStyle = 'border-slate-200 hover:border-blue-400 hover:bg-slate-50';

                    if (submitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold';
                      } else if (isSelected) {
                        optionStyle = 'border-rose-500 bg-rose-50 text-rose-900 line-through';
                      } else {
                        optionStyle = 'border-slate-200 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle = 'border-blue-600 bg-blue-50/80 text-blue-900 font-semibold ring-1 ring-blue-600';
                    }

                    return (
                      <label
                        key={optIdx}
                        onClick={() => handleSelect(qIdx, optIdx)}
                        className={`flex items-center gap-3 p-3 rounded-lg border text-sm cursor-pointer transition-all ${optionStyle}`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIdx}`}
                          checked={isSelected}
                          onChange={() => handleSelect(qIdx, optIdx)}
                          disabled={submitted}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="flex-1">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit / Results Area */}
        <div id="assessment-result" className="my-8">
          {!submitted ? (
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="cursor-pointer px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-md transition-all text-base"
              >
                Submit Knowledge Check ({Object.keys(selectedAnswers).length}/{total} Answered)
              </button>
            </div>
          ) : (
            <div
              className={`p-6 rounded-2xl border ${
                isPassed
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-3">
                {isPassed ? (
                  <CheckCircle className="w-8 h-8 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-8 h-8 text-amber-600 shrink-0" />
                )}
                <div>
                  <h3 className="text-xl font-bold">
                    {score} / {total} correct — {percentage}%
                  </h3>
                  <p className="text-sm mt-1">
                    {isPassed
                      ? 'Congratulations! You have passed the QuickFile Essentials knowledge check. Complete the practical checks below to finish the course.'
                      : 'The target pass mark is 80%. Review the relevant lessons and try again to improve your score.'}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleReset}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Retake Assessment
                </button>
                <button
                  onClick={onBackToCourse}
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Return to Course Hub
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Practical Checks Section */}
        <div className="mt-12 space-y-6">
          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Part 2: Practical Checks (In QuickFile)
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Verify these five core items inside your Brightside training account:
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {practicalChecks.map((check) => {
              const isChecked = practicalCompleted[check.id] ?? false;
              return (
                <div
                  key={check.id}
                  onClick={() => togglePractical(check.id)}
                  className="p-5 flex items-start gap-4 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                      isChecked
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {isChecked ? '✓' : check.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {check.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{check.desc}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => togglePractical(check.id)}
                    className="w-5 h-5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500 mt-1"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
