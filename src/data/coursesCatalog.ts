import { Course } from '../types';
import { SECTIONS, LESSONS, QUIZ_QUESTIONS, PRACTICAL_CHECKS, ALL_RESOURCES } from './courseData';
import {
  COURSE_2_SECTIONS,
  COURSE_2_LESSONS,
  COURSE_2_QUIZ_QUESTIONS,
  COURSE_2_PRACTICAL_CHECKS,
  COURSE_2_RESOURCES,
} from './courses/course2Data';
import {
  COURSE_BASICS_SECTIONS,
  COURSE_BASICS_LESSONS,
  COURSE_BASICS_QUIZ_QUESTIONS,
  COURSE_BASICS_PRACTICAL_CHECKS,
  COURSE_BASICS_RESOURCES,
} from './courses/courseBasicsData';

export const COURSE_BASICS: Course = {
  id: 'basics',
  number: 1,
  slug: 'quickfile-basics',
  title: 'QuickFile Basics: Bookkeeping for Beginners',
  subtitle: 'Learn the essential QuickFile bookkeeping skills you need to get started with confidence.',
  badge: 'Beginner Course',
  badgeTag: 'Practical Beginner Course',
  level: 'Beginner',
  category: 'Core Bookkeeping',
  duration: '2h 15m',
  sectionsCount: COURSE_BASICS_SECTIONS.length,
  lessonsCount: 16,
  description:
    'Learn the essential QuickFile bookkeeping skills you need to get started with confidence. Work step-by-step through a fictional training company called Brightside Web Design Ltd.',
  longDescription:
    "This practical beginner course takes you step by step through the core areas of QuickFile used for everyday bookkeeping. Rather than simply watching software demonstrations, you'll work through a fictional training business called Brightside Web Design Ltd. As you progress, you'll create records and transactions that are used again in later exercises, helping you understand how the different areas of QuickFile work together.",
  whatYoullLearn: [
    'Create and access a QuickFile account',
    'Navigate the main areas of QuickFile',
    'Create clients and suppliers',
    'Create sales invoices',
    'Set up reusable inventory items',
    'Record supplier purchases',
    'Categorise business expenses',
    'Understand the QuickFile Banking screen',
    'Import transactions from a bank statement',
    'Understand how Open Banking feeds work',
    'Tag customer payments and match them to invoices',
    'Tag supplier payments and match them to purchases',
    'Categorise other bank transactions',
    'Recognise and correctly record transfers between bank accounts',
    'Follow a complete bookkeeping workflow from invoice or purchase through to payment and bank tagging',
  ],
  practicalLearning:
    "Throughout the course you'll use Brightside Web Design Ltd to practise the skills covered in each lesson. Supporting resources and practical exercises allow you to follow along in your own QuickFile training account. The exercises build on one another, giving you experience of a connected bookkeeping workflow rather than unrelated demonstrations.",
  targetAudience:
    'New QuickFile users, small business owners, sole traders, freelancers, people starting to manage their own bookkeeping, and anyone wanting a practical introduction to QuickFile. No previous QuickFile experience is required.',
  notCovered:
    'QuickFile Basics deliberately focuses on the core beginner workflow. More advanced subjects such as VAT and Making Tax Digital, Making Tax Digital for Income Tax, advanced reporting, journals, automated bank tagging rules and QuickFile Affinity are outside the scope of this course.',
  topics: [
    'Creating & Navigating Your QuickFile Account',
    'Clients & Suppliers Records Management',
    'Sales Invoicing & Reusable Inventory Items',
    'Purchases, Receipts & Expense Categorisation',
    'The QuickFile Banking Screen & Open Banking Feeds',
    'CSV Bank Statement Imports',
    'Tagging Customer Receipts & Supplier Payments',
    'End-to-End Practical Exercise & Assessment',
  ],
  gradient: 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]',
  accentColor: '#4b7ff5',
  storageKey: 'qf-complete-course-basics',
  featured: true,
  sections: COURSE_BASICS_SECTIONS,
  lessons: COURSE_BASICS_LESSONS,
  quizQuestions: COURSE_BASICS_QUIZ_QUESTIONS,
  practicalChecks: COURSE_BASICS_PRACTICAL_CHECKS,
  resources: COURSE_BASICS_RESOURCES,
};

export const COURSE_1: Course = {
  id: 'essentials',
  number: 2,
  slug: 'quickfile-essentials',
  title: 'QuickFile Essentials',
  subtitle:
    'A practical, step-by-step course designed to help beginners become confident using QuickFile for everyday bookkeeping.',
  badge: 'Customer Training',
  badgeTag: 'Popular Foundation Course',
  level: 'Beginner',
  category: 'Core Bookkeeping',
  duration: '3h 30m',
  sectionsCount: SECTIONS.length,
  lessonsCount: Object.keys(LESSONS).length,
  description:
    'A practical, step-by-step course designed to help beginners become confident using QuickFile for everyday bookkeeping. Follow Brightside Web Design Ltd through a realistic workflow.',
  longDescription:
    "QuickFile Essentials: Complete Beginner's Guide to QuickFile is a practical, step-by-step course designed to help beginners become confident using QuickFile for everyday bookkeeping. Rather than simply showing you where features are located, this course takes you through a realistic bookkeeping workflow using a fictional training business, Brightside Web Design Ltd. You'll follow the business through the process of setting up QuickFile, creating customers and suppliers, raising sales invoices, recording purchases, importing bank transactions and completing the associated bookkeeping.",
  whatYoullLearn: [
    'Set up and navigate a QuickFile account.',
    'Manage team members and understand user access.',
    'Create and import clients and suppliers.',
    'Create sales invoices and reusable inventory items.',
    'Record and categorise business purchases.',
    'Understand the QuickFile Banking screen.',
    'Import bank transactions from a CSV statement.',
    'Understand how Open Banking feeds work.',
    'Tag customer and supplier bank transactions.',
    'Match payments to existing invoices and purchases.',
    'Record expenses and bank transfers correctly.',
    'Create automated bank tagging rules for recurring transactions.',
    'Review transactions and reconcile a bank account.',
  ],
  practicalLearning:
    "Throughout the course, you'll have access to downloadable training files including fictional client and supplier data, sales and purchase exercises, inventory items and a sample bank statement. You'll use these resources to build your own training account alongside the lessons, allowing you to practise the processes rather than simply watch them.",
  targetAudience:
    'This course is suitable for beginners new to QuickFile, small business owners, sole traders, company owners, employees who use QuickFile as part of their role, bookkeepers new to the platform, and anyone wanting practical experience before working with live business records. No previous QuickFile experience is required.',
  learningOutcomes:
    "By the end of the course, you'll have worked through a complete practical bookkeeping scenario and gained the confidence to navigate QuickFile and perform essential day-to-day bookkeeping tasks. Each major section includes a knowledge-check quiz, followed by a final course assessment covering the complete QuickFile Essentials workflow.",
  notCovered:
    'More advanced subjects such as custom nominal ledger journals, accruals and prepayments, fixed asset depreciation, and year-end procedures are covered in Course 3 (QuickFile Advanced Bookkeeping).',
  topics: [
    'Company Settings & Account Customisation',
    'Clients & Suppliers CSV Imports',
    'Sales Invoicing & Reusable Items',
    'Purchase Records & Expense Categorisation',
    'Bank Statement CSV Imports & Feeds',
    'Automated Bank Tagging Rules',
    'Bank Reconciliation & Verification',
    'End-of-Course Practical Assessment',
  ],
  gradient: 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]',
  accentColor: '#4b7ff5',
  storageKey: 'qf-complete',
  featured: true,
  sections: SECTIONS,
  lessons: LESSONS,
  quizQuestions: QUIZ_QUESTIONS.map((q, idx) => ({
    id: idx + 1,
    question: q.question,
    options: q.options,
    correctIndex: q.correctIndex,
    explanation:
      'Review the corresponding lecture in the course to reinforce this core principle.',
    relatedLecture: `Question ${idx + 1}`,
    relatedLessonId: idx + 1 <= 20 ? idx + 1 : 20,
  })),
  practicalChecks: PRACTICAL_CHECKS,
  resources: ALL_RESOURCES.map((r, idx) => ({
    id: idx + 1,
    title: r.name,
    url: r.url,
    size: '10 - 25 kB',
    type: r.type,
    lesson: r.lesson,
  })),
};

export const COURSE_2: Course = {
  id: 'advanced',
  number: 3,
  slug: 'quickfile-advanced',
  title: 'QuickFile Advanced Bookkeeping & Year-End',
  subtitle: 'Nominal ledger customisation, manual journals, MTD VAT returns & year-end accounts. Currently in development.',
  badge: 'Course 3 • In Development',
  badgeTag: 'In Development • Coming Soon',
  level: 'Intermediate',
  category: 'Advanced & Compliance',
  duration: '2h 45m',
  sectionsCount: COURSE_2_SECTIONS.length,
  lessonsCount: Object.keys(COURSE_2_LESSONS).length,
  description:
    'Course 3 is currently in development. Deepen your bookkeeping mastery in QuickFile with double-entry journals, accruals and prepayments, Making Tax Digital VAT return audits, fixed assets depreciation, and year-end procedures.',
  longDescription:
    'This course is currently in development. Tailored for growing businesses, finance managers, and bookkeepers who require complete control over the general ledger. Learn how to structure custom nominal codes, balance suspense accounts, capitalise assets, calculate straight-line depreciation, handle multi-currency foreign exchange gains/losses, lock accounts, and export clean financial statements for your accountant.',
  topics: [
    'Chart of Accounts & Custom Nominal Ranges',
    'Double-Entry Manual Journals & Auto-Reversals',
    'Accruals & Prepayments Adjustments',
    'Clearing Suspense Accounts (Nominal 9998)',
    'HMRC Making Tax Digital (MTD) VAT Submissions',
    'Fixed Asset Registers & Monthly Depreciation',
    'Multi-Currency Invoicing & Realised FX Differences',
    'Year-End Account Locking & Accountant Access',
  ],
  gradient: 'from-[#4b7ff5] via-[#3d8ef0] to-[#25afe0]',
  accentColor: '#4b7ff5',
  storageKey: 'qf-complete-course-2',
  inDevelopment: true,
  featured: false,
  sections: COURSE_2_SECTIONS,
  lessons: COURSE_2_LESSONS,
  quizQuestions: COURSE_2_QUIZ_QUESTIONS,
  practicalChecks: COURSE_2_PRACTICAL_CHECKS,
  resources: COURSE_2_RESOURCES,
};

export const COURSES: Course[] = [COURSE_BASICS, COURSE_1, COURSE_2];

export function getCourseById(id: string | null | undefined): Course {
  if (!id) return COURSE_BASICS;
  const found = COURSES.find((c) => c.id === id || c.slug === id);
  return found || COURSE_BASICS;
}
