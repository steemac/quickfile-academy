export interface ResourceLink {
  title: string;
  url: string;
}

export interface QuizQuestionItem {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedLecture: string;
  relatedLessonId: number;
}

export interface ExpectedResultGroup {
  category: string;
  items: string[];
}

export interface AdditionalInvoice {
  name: string;
  date: string;
  description: string;
  quantity: number | string;
  net: string;
  vat: string;
  total: string;
  note?: string;
}

export interface AdditionalExerciseSection {
  title: string;
  lead?: string;
  invoices?: AdditionalInvoice[];
  followUp?: string[];
  checklistTitle?: string;
  checklistSubtitle?: string;
  checklist?: string[];
}

export interface ImportantNotice {
  lead?: string;
  items?: string[];
  followUp?: string;
}

export interface TextSection {
  title: string;
  lead?: string;
  paragraphs?: string[];
  highlight?: string;
  items?: string[];
  kvs?: [string, string][];
  sublead?: string;
  kvs2?: [string, string][];
  sublead2?: string;
  kvs3?: [string, string][];
  followUp?: string;
}

export interface Lesson {
  id: number;
  title: string;
  objective: string;
  duration: string;
  video?: string;
  videoTitle?: string;
  body: string[];
  learn?: string[];
  checklistTitle?: string;
  exercise?: string;
  exerciseDetails?: string[];
  exerciseFollowUp?: string[];
  expectedResult?: {
    description: string;
    groups: ExpectedResultGroup[];
  };
  additionalSection?: AdditionalExerciseSection;
  textSections?: TextSection[];
  keyPoint?: string;
  important?: string | ImportantNotice;
  resource?: [string, string][];
  support?: string;
  youtube?: string;
  prev?: number;
  next?: number;
  assessment?: boolean;
  isQuiz?: boolean;
  quizQuestions?: QuizQuestionItem[];
  displayNumber?: string;
}

export interface Section {
  n: number;
  title: string;
  desc: string;
  duration: string;
  lessons: number[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface PracticalCheck {
  id: number;
  title: string;
  desc: string;
}

export interface CourseResource {
  id: number;
  title: string;
  url: string;
  size: string;
  type: string;
  lesson: number;
}

export interface Course {
  id: string;
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeTag: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category: string;
  duration: string;
  sectionsCount: number;
  lessonsCount: number;
  description: string;
  longDescription?: string;
  topics: string[];
  gradient: string;
  accentColor: string;
  storageKey: string;
  inDevelopment?: boolean;
  featured?: boolean;
  sections: Section[];
  lessons: Record<number, Lesson>;
  quizQuestions: QuizQuestionItem[];
  practicalChecks?: PracticalCheck[];
  resources?: CourseResource[];
  whatYoullLearn?: string[];
  practicalLearning?: string;
  targetAudience?: string;
  notCovered?: string;
  learningOutcomes?: string;
}
