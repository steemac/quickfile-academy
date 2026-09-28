import React, { useState } from 'react';
import { QuizQuestionItem } from '../types';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  HelpCircle,
  Award,
} from 'lucide-react';

interface SectionQuizProps {
  quizTitle: string;
  questions: QuizQuestionItem[];
  onSelectLesson?: (lessonId: number) => void;
  onPassQuiz?: () => void;
}

export const SectionQuiz: React.FC<SectionQuizProps> = ({
  quizTitle,
  questions,
  onSelectLesson,
  onPassQuiz,
}) => {
  // Store user's selected answer index for each question: { [questionId]: selectedOptionIndex }
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
  };

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const correctCount = questions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;
  const allCorrect = correctCount === totalQuestions;

  return (
    <div className="space-y-6">
      {/* Quiz Intro Banner */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50/50 to-white border border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-xs shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                  Section Knowledge Check
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {totalQuestions} Questions
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                {quizTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Select your answer for each question. Correct answers will display a detailed explanation. If you select an incorrect answer, you will be directed to the relevant lecture to review.
              </p>
            </div>
          </div>

          {/* Score Counter / Reset */}
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Answered</span>
              <span className="text-sm font-bold text-slate-800">
                {answeredCount} / {totalQuestions}
              </span>
            </div>
            {answeredCount > 0 && (
              <button
                type="button"
                onClick={handleResetQuiz}
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                title="Reset answers"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, qIndex) => {
          const selectedOption = selectedAnswers[q.id];
          const hasSelected = selectedOption !== undefined;
          const isCorrect = hasSelected && selectedOption === q.correctIndex;
          const isWrong = hasSelected && selectedOption !== q.correctIndex;

          return (
            <div
              key={q.id}
              className={`rounded-2xl border transition-all p-5 sm:p-6 bg-white shadow-2xs ${
                hasSelected
                  ? isCorrect
                    ? 'border-emerald-300 ring-2 ring-emerald-100'
                    : 'border-amber-300 ring-2 ring-amber-100'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Question {qIndex + 1} of {totalQuestions}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {q.question}
                  </h3>
                </div>

                {/* Status Pill */}
                {hasSelected && (
                  <span
                    className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Review Lecture</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* 4 Options Grid/List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {q.options.map((optionText, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
                  const isThisSelected = selectedOption === optIdx;
                  const isThisCorrect = optIdx === q.correctIndex;

                  let optionStyle =
                    'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
                  let badgeStyle = 'bg-white text-slate-600 border-slate-200';

                  if (hasSelected) {
                    if (isThisSelected && isCorrect) {
                      optionStyle =
                        'bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-300 font-semibold';
                      badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                    } else if (isThisSelected && isWrong) {
                      optionStyle =
                        'bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-200';
                      badgeStyle = 'bg-rose-600 text-white border-rose-600';
                    } else if (isCorrect) {
                      // If the question is answered correctly, keep unselected options subdued
                      optionStyle = 'bg-slate-50/40 border-slate-200/80 text-slate-400 opacity-60';
                      badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
                    } else {
                      // If wrong answer was chosen, other options remain active without revealing which is correct
                      optionStyle =
                        'bg-slate-50/70 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
                      badgeStyle = 'bg-white text-slate-600 border-slate-200';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`cursor-pointer w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group relative ${optionStyle}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 border mt-0.5 transition-colors ${badgeStyle}`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm leading-relaxed flex-1">
                        {optionText}
                      </span>
                      {isThisSelected && isCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isThisSelected && isWrong && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Panels */}
              {isCorrect && (
                <div className="mt-4 p-4 bg-emerald-50/90 border border-emerald-200 rounded-xl text-emerald-950 space-y-1 animate-fadeIn">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Explanation</span>
                  </div>
                  <p className="text-sm text-emerald-900 leading-relaxed font-medium">
                    {q.explanation}
                  </p>
                </div>
              )}

              {isWrong && (
                <div className="mt-4 p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                        Please review the course material
                      </div>
                      <p className="text-sm text-amber-900 leading-relaxed mt-0.5">
                        Refer back to <strong className="font-semibold text-amber-950">{q.relatedLecture}</strong> to review this topic.
                      </p>
                    </div>
                  </div>

                  {onSelectLesson && (
                    <button
                      type="button"
                      onClick={() => onSelectLesson(q.relatedLessonId)}
                      className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs font-semibold shrink-0 shadow-xs transition-all"
                    >
                      <span>Go to {q.relatedLecture}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Banner */}
      {answeredCount === totalQuestions && (
        <div
          className={`p-6 rounded-2xl border text-center space-y-3 ${
            allCorrect
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
              : 'bg-blue-50/90 border-blue-200 text-blue-950'
          }`}
        >
          <div className="inline-flex p-3 rounded-full bg-white shadow-xs mx-auto">
            <Award className={`w-6 h-6 ${allCorrect ? 'text-emerald-600' : 'text-blue-600'}`} />
          </div>
          <h3 className="text-lg font-bold">
            {allCorrect
              ? 'Excellent work! You answered all questions correctly!'
              : `Quiz complete: ${correctCount} of ${totalQuestions} correct`}
          </h3>
          <p className="text-sm max-w-md mx-auto text-slate-600 leading-relaxed">
            {allCorrect
              ? `You have successfully completed ${quizTitle}! You are ready to move on to the next section.`
              : 'You can review any lecture you need to reinforce, or click reset to test yourself again.'}
          </p>
        </div>
      )}
    </div>
  );
};
