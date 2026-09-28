import { Section, Lesson, QuizQuestionItem, PracticalCheck, CourseResource } from '../../types';

export const COURSE_BASICS_SECTIONS: Section[] = [
  {
    n: 1,
    title: 'Getting Started',
    desc: 'Learn how to begin using QuickFile, create an account and confidently navigate the main areas of the software.',
    duration: '14:07',
    lessons: [201, 202, 203, 204],
  },
  {
    n: 2,
    title: 'Clients & Suppliers',
    desc: 'Learn how to create and manage the core client and supplier records used in everyday bookkeeping.',
    duration: '18:00',
    lessons: [205, 206, 207],
  },
  {
    n: 3,
    title: 'Sales & Invoicing',
    desc: 'Learn how to create sales invoices and use reusable inventory items to make regular invoicing quicker and more consistent.',
    duration: '24:00',
    lessons: [208, 209, 210],
  },
  {
    n: 4,
    title: 'Purchases & Expenses',
    desc: 'Learn how to record business purchases and categorise everyday expenses correctly in QuickFile.',
    duration: '22:00',
    lessons: [211, 212, 213],
  },
  {
    n: 5,
    title: 'Banking',
    desc: 'Learn how to use the QuickFile banking area, bring bank transactions into the account and understand the role of Open Banking feeds.',
    duration: '26:00',
    lessons: [214, 215, 216, 217],
  },
  {
    n: 6,
    title: 'Bank Tagging',
    desc: 'Learn how to review and tag bank transactions and connect everyday bookkeeping records with the movements appearing in the bank account.',
    duration: '25:00',
    lessons: [218, 219, 220],
  },
  {
    n: 7,
    title: 'Final Assessment & Next Steps',
    desc: 'Bring the core QuickFile Basics workflow together with a final knowledge check and practical bookkeeping exercise, followed by guidance on what to learn next.',
    duration: '28:00',
    lessons: [221, 222, 223],
  },
];

export const COURSE_BASICS_LESSONS: Record<number, Lesson> = {
  201: {
    id: 201,
    displayNumber: '01',
    title: 'Welcome & Course Instructions',
    objective: 'Understand how to use the course, the sequential training workflow, and meet Brightside Web Design Ltd.',
    duration: '02:13',
    videoTitle: 'QuickFile Basics: Welcome & Course Instructions.mp4',
    support: 'https://support.quickfile.co.uk/',
    body: [
      'Welcome to QuickFile Basics. This course is designed to give new QuickFile users a practical introduction to the core bookkeeping workflow.',
    ],
    textSections: [
      {
        title: 'How to Use the Course',
        paragraphs: [
          'Work through the lessons in order. The practical exercises use one fictional training business, Brightside Web Design Ltd, so records created in earlier lessons are used again later.',
          'Use a separate training or test QuickFile account. Do not enter fictional course information into a live business account containing real accounting records.',
        ],
        sublead: 'For each lesson:',
        items: [
          '1. Watch the lesson video.',
          '2. Read the lesson notes.',
          '3. Open any supplied resource files.',
          '4. Complete the practical exercise.',
          '5. Complete the section quiz before continuing.',
        ],
      },
      {
        title: 'Training Workflow',
        paragraphs: [
          'You will progressively create clients and suppliers, sales invoices, purchases and bank records. Later, you will import a training bank statement and match or categorise its transactions.',
          'The course culminates in an end-to-end exercise covering client → invoice → customer payment → bank → tagging and supplier → purchase → supplier payment → bank → tagging.',
        ],
      },
      {
        title: 'Training Business Profile',
        kvs: [
          ['Training Business', 'Brightside Web Design Ltd'],
          ['Business Activity', 'Web design and digital services'],
          ['VAT Status for Course Exercises', 'VAT registered'],
          ['Training Period', 'September 2026'],
          ['Opening Bank Balance', '£1,000'],
        ],
        followUp:
          'All business names, contacts and transactions used in the exercises are fictional and are provided solely for training.',
      },
    ],
    keyPoint:
      'Bookkeeping is a connected workflow. Records created in earlier lessons are used again later, culminating in a complete end-to-end client, supplier, invoice, purchase, and bank tagging cycle.',
    checklistTitle: 'Course Instructions Checklist',
    learn: [
      'Work through lessons in sequence using a separate training or test QuickFile account.',
      'Follow the 5-step process for each lesson: video, notes, resource files, practical exercise, and quiz.',
      'Understand Brightside Web Design Ltd scenario: VAT registered, £1,000 opening balance, Sept 2026 period.',
    ],
    prev: undefined,
    next: 202,
  },

  202: {
    id: 202,
    displayNumber: '02',
    title: 'Creating Your QuickFile Account',
    objective: 'Create or access the QuickFile account you will use for the practical exercises and confirm access to the main dashboard.',
    duration: '02:27',
    videoTitle: 'QuickFile Signup Process.mp4',
    youtube: 'https://www.youtube.com/watch?v=ochOpf5AHCw&t=24s',
    support: 'https://support.quickfile.co.uk/t/setting-up-your-account/8800',
    body: [
      'Create or access the QuickFile account you will use for the practical exercises. At this stage, make sure you can sign in, access the dashboard and see the main navigation options.',
      'Use the supplied Business Profile as the reference for Brightside Web Design Ltd. Do not invent official company registration numbers, tax references or other identifiers simply to complete the exercise.',
    ],
    exercise:
      'Create or access the QuickFile account you will use for the practical exercises. At this stage, make sure you can sign in, access the dashboard and see the main navigation options.',
    exerciseDetails: [
      'Use the supplied Business Profile as the reference for Brightside Web Design Ltd. Do not invent official company registration numbers, tax references or other identifiers simply to complete the exercise.',
      'Before continuing, confirm that you can sign in to QuickFile and access the main dashboard.',
    ],
    resource: [
      ['Resource - Business Profile.xlsx (3.9 kB)', '#download-business-profile'],
    ],
    keyPoint:
      'Before continuing, confirm that you can sign in to QuickFile and access the main dashboard. Do not invent official company registration numbers or tax references.',
    checklistTitle: 'Before Continuing',
    learn: [
      'Confirm that you can sign in to QuickFile and access the main dashboard.',
      'Verify that the main navigation options (Dashboard, Sales, Purchases, Banking, Reports, Account Settings) are visible.',
    ],
    prev: 201,
    next: 203,
  },

  203: {
    id: 203,
    displayNumber: '03',
    title: 'Navigating QuickFile',
    objective: 'Explore the QuickFile interface and locate Sales, Purchases, Banking, Reports, Account Settings and QuickSearch.',
    duration: '04:27',
    videoTitle: 'QuickFile Interface Tour_ Navigate Sales, Purchases, Banking & More (1)....mp4',
    youtube: 'https://www.youtube.com/watch?v=TPA37PBbCtM&t=10s',
    support: 'https://support.quickfile.co.uk/t/dashboard-overview/8802',
    body: [
      'Practical Exercise: Explore the QuickFile interface and locate Sales, Purchases, Banking, Reports, Account Settings and QuickSearch. Try using QuickSearch to locate a menu or screen.',
      'This lesson is about familiarity rather than data entry. By the end, you should be comfortable moving between the main bookkeeping areas used later in the course.',
    ],
    exercise:
      'Explore the QuickFile interface and locate Sales, Purchases, Banking, Reports, Account Settings and QuickSearch. Try using QuickSearch to locate a menu or screen.',
    exerciseDetails: [
      '• Locate the main top menu areas: Sales, Purchases, Banking, Reports, and Account Settings.',
      '• Test the QuickSearch bar to jump directly to any menu or screen in QuickFile.',
      '• Check the dashboard overview widgets for Sales, Purchases, Banking, and Pinboard.',
    ],
    keyPoint:
      'This lesson is about familiarity rather than data entry. By the end, you should be comfortable moving between the main bookkeeping areas used later in the course.',
    checklistTitle: 'Interface Familiarity Checklist',
    learn: [
      'Locate Sales, Purchases, Banking, Reports, Account Settings, and QuickSearch.',
      'Use QuickSearch to quickly locate a menu or screen.',
      'Gain comfort moving between the main bookkeeping areas before entering data.',
    ],
    prev: 202,
    next: 204,
  },

  204: {
    id: 204,
    title: 'Getting Started Quiz',
    objective: 'Test your understanding of QuickFile account creation, interface navigation, and the training workflow.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'What type of QuickFile account is recommended for the course exercises?',
        options: [
          'A live business account',
          'A separate training or test account',
          'A closed account',
          'An unrelated client account',
        ],
        correctIndex: 1,
        explanation:
          'Always use a separate training or test account. Do not enter fictional course information into a live business account containing real accounting records.',
        relatedLecture: 'Lesson 01 - Welcome & Course Instructions',
        relatedLessonId: 201,
      },
      {
        id: 2,
        question: 'Which feature can help you quickly locate menus and screens?',
        options: [
          'QuickSearch',
          'Bank Reconciliation',
          'VAT Return',
          'Inventory Export',
        ],
        correctIndex: 0,
        explanation:
          'QuickSearch in the top menu lets you type any screen, setting or menu name to navigate there immediately.',
        relatedLecture: 'Lesson 03 - Navigating QuickFile',
        relatedLessonId: 203,
      },
      {
        id: 3,
        question: 'Which area will you use for business bank transactions?',
        options: [
          'Banking',
          'Reports',
          'Team Management',
          'Clients',
        ],
        correctIndex: 0,
        explanation:
          'The Banking section is where you view bank accounts, upload bank statements, connect Open Banking feeds, and tag bank transactions.',
        relatedLecture: 'Lesson 03 - Navigating QuickFile',
        relatedLessonId: 203,
      },
      {
        id: 4,
        question: 'Which area will you use to create customer invoices?',
        options: [
          'Sales',
          'Purchases',
          'Banking',
          'Reports',
        ],
        correctIndex: 0,
        explanation:
          'The Sales area is used to manage clients, create new sales invoices, configure reusable inventory items, and record client payments.',
        relatedLecture: 'Lesson 03 - Navigating QuickFile',
        relatedLessonId: 203,
      },
      {
        id: 5,
        question: 'Why should fictional Brightside data not be entered into a live business account?',
        options: [
          'It could affect real accounting records',
          'QuickFile blocks training data',
          'Training accounts cannot use Banking',
          'It changes your password',
        ],
        correctIndex: 0,
        explanation:
          'Entering fictional training data into a live business account would distort your real financial statements, VAT returns, and genuine accounting records.',
        relatedLecture: 'Lesson 01 - Welcome & Course Instructions',
        relatedLessonId: 201,
      },
    ],
    body: [
      'Review your knowledge of QuickFile account setup, interface navigation, and the training workflow.',
      'Pass suggestion: 4/5 (80%). Complete the 5 questions below before continuing to Section 2: Clients & Suppliers.',
    ],
    prev: 203,
    next: 205,
  },

  205: {
    id: 205,
    displayNumber: '04',
    title: 'Adding Your First Client',
    objective: 'Create a client record in QuickFile, configure billing details, and set default payment terms.',
    duration: '08:30',
    videoTitle: 'Lesson 04 - Adding Your First Client.mp4',
    youtube: 'https://www.youtube.com/watch?v=JVHw9VEEH5c',
    support: 'https://support.quickfile.co.uk/t/managing-clients/8810',
    body: [
      'In everyday bookkeeping, clients (customers) are the individuals or businesses you sell goods or services to. Setting up accurate client records makes issuing future invoices quick, seamless, and consistent.',
      'In QuickFile, each client profile holds their registered address, billing email, payment terms (such as Net 14 or Net 30 days), and preferred currency.',
    ],
    exercise: 'Add client "Apex Retail Solutions Ltd" to your Brightside Web Design account.',
    exerciseDetails: [
      '1. Navigate to Sales > Create New Client (or Sales > View All Clients > Create Client).',
      '2. Company Name: Apex Retail Solutions Ltd',
      '3. Primary Contact Name: Sarah Jenkins',
      '4. Email Address: accounts@apexretailsolutions.co.uk',
      '5. Address: 14 High Street, Manchester, M1 4DY',
      '6. Payment Terms: 30 Days from invoice date.',
      '7. Click Save Client.',
    ],
    keyPoint:
      'Setting payment terms on the client record automatically calculates the Due Date whenever you create a new invoice for that customer.',
    checklistTitle: 'Client Setup Verification',
    learn: [
      'Create a new client record from the Sales menu.',
      'Configure customer contact details, invoice delivery email, and billing address.',
      'Set custom default payment terms (e.g. 30 days).',
    ],
    prev: 204,
    next: 206,
  },

  206: {
    id: 206,
    displayNumber: '05',
    title: 'Adding Your First Supplier',
    objective: 'Create a supplier vendor record, set default nominal categories, and record vendor details.',
    duration: '08:15',
    videoTitle: 'Lesson 05 - Adding Your First Supplier.mp4',
    youtube: 'https://www.youtube.com/watch?v=ujRCeZZP9jw',
    support: 'https://support.quickfile.co.uk/t/managing-suppliers/8812',
    body: [
      'Suppliers are the businesses you purchase goods, subscriptions, and services from. Setting up supplier records ensures your business expenses are neatly tracked and categorized.',
      'QuickFile allows you to assign a default nominal expense category to each supplier. For example, assigning "Web Hosting & Domains" to your server host means future bills auto-categorise with a single click.',
    ],
    exercise: 'Add supplier "CloudServer Hosting UK Ltd" to Brightside Web Design.',
    exerciseDetails: [
      '1. Navigate to Purchases > Create New Supplier.',
      '2. Supplier Name: CloudServer Hosting UK Ltd',
      '3. Contact: Billing Department',
      '4. Email: support@cloudserverhosting.co.uk',
      '5. Address: 22 Technology Park, Reading, RG2 6AA',
      '6. Default Expense Category: Hosting & Domain Services (or Computer & IT Expenses).',
      '7. Save the supplier record.',
    ],
    keyPoint:
      'Assigning a default purchase category to a supplier saves time and prevents miscategorising recurring vendor bills.',
    checklistTitle: 'Supplier Verification Checklist',
    learn: [
      'Navigate the Purchases menu to create supplier accounts.',
      'Set default expense categories for recurring suppliers.',
      'Understand the difference between a Client (debtor) and a Supplier (creditor).',
    ],
    prev: 205,
    next: 207,
  },

  207: {
    id: 207,
    title: 'Clients & Suppliers Quiz',
    objective: 'Check your knowledge on managing client contacts, supplier defaults, and payment terms.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'What happens when you set default payment terms of 30 days on a client profile?',
        options: [
          'QuickFile automatically sets the Due Date to 30 days after the issue date on all future invoices for that client',
          'QuickFile charges the customer credit card on day 30 automatically',
          'The invoice cannot be paid before 30 days',
          'The customer receives an immediate overdue reminder',
        ],
        correctIndex: 0,
        explanation:
          'Payment terms defined on the client profile automatically calculate and populate the Due Date when creating new sales invoices.',
        relatedLecture: 'Lesson 04 - Adding Your First Client',
        relatedLessonId: 205,
      },
      {
        id: 2,
        question: 'Why is it helpful to assign a default expense category to a supplier record in QuickFile?',
        options: [
          'It ensures all future purchase invoices for this supplier automatically default to the selected nominal code, saving time',
          'It is required by law for all suppliers',
          'It prevents suppliers from issuing invoices over £1,000',
          'It hides the supplier from your profit and loss report',
        ],
        correctIndex: 0,
        explanation:
          'Default categories speed up data entry by automatically selecting the correct expense code whenever you log a purchase from that supplier.',
        relatedLecture: 'Lesson 05 - Adding Your First Supplier',
        relatedLessonId: 206,
      },
    ],
    body: [
      'Ensure you are confident setting up client and supplier records in QuickFile.',
      'Pass this quiz to proceed to Section 3: Sales & Invoicing.',
    ],
    prev: 206,
    next: 208,
  },

  208: {
    id: 208,
    displayNumber: '06',
    title: 'Creating Your First Sales Invoice',
    objective: 'Draft, calculate, preview, and issue a professional sales invoice to Apex Retail Solutions Ltd.',
    duration: '11:45',
    videoTitle: 'Lesson 06 - Creating Your First Sales Invoice.mp4',
    youtube: 'https://www.youtube.com/watch?v=8mG53b8Vf4w',
    support: 'https://support.quickfile.co.uk/t/creating-invoices/8815',
    body: [
      'Invoicing is where revenue enters your bookkeeping system. An invoice is a formal legal document requesting payment from a customer for goods or services delivered.',
      'In QuickFile, creating an invoice automatically updates your Accounts Receivable (Owed to you) and records the revenue in your Sales nominal ledger (Code 4000 General Sales).',
    ],
    exercise: 'Create invoice INV-001 for Apex Retail Solutions Ltd.',
    exerciseDetails: [
      '1. Navigate to Sales > Create Invoice.',
      '2. Select Client: Apex Retail Solutions Ltd.',
      '3. Issue Date: Today. Due Date: 30 days from today (auto-populated).',
      '4. Line Item 1: "E-Commerce Website Development - Milestone 1: UX Design & Storefront Architecture".',
      '5. Quantity: 1 | Unit Price: £1,200.00 | VAT Rate: 20% (£240.00) | Line Total: £1,440.00.',
      '6. Click Preview & Save as Draft, then Send or Mark as Sent.',
    ],
    keyPoint:
      'Once marked as Sent, the invoice status becomes UNPAID and will appear in your "Owed to you" dashboard until it is tagged against a bank payment.',
    checklistTitle: 'Invoice Creation Checklist',
    learn: [
      'Select a client and populate invoice line items.',
      'Verify net amounts, VAT calculations, and total gross balances.',
      'Understand invoice statuses: Draft, Sent (Unpaid), and Paid.',
    ],
    prev: 207,
    next: 209,
  },

  209: {
    id: 209,
    displayNumber: '07',
    title: 'Reusable Inventory Items',
    objective: 'Set up reusable service and product inventory items to speed up regular invoicing.',
    duration: '09:15',
    videoTitle: 'Lesson 07 - Reusable Inventory Items.mp4',
    youtube: 'https://www.youtube.com/watch?v=JVHw9VEEH5c',
    support: 'https://support.quickfile.co.uk/t/inventory-items/8816',
    body: [
      'If your business frequently bills for the same products, hourly rates, or fixed-price service packages, creating reusable items saves considerable time.',
      'When adding line items to an invoice, you can simply pick from your saved inventory list. QuickFile will automatically fill in the description, unit price, nominal code, and standard VAT rate.',
    ],
    exercise: 'Create a reusable service item for Brightside Web Design Ltd.',
    exerciseDetails: [
      '1. Navigate to Sales > Inventory Management (or Items).',
      '2. Click Create New Item.',
      '3. Item Name: Monthly Website Support & Security Care Plan',
      '4. Description: "Continuous uptime monitoring, CMS security updates, weekly cloud backups, and up to 2 hours of technical support."',
      '5. Unit Price: £75.00',
      '6. Sales Nominal Code: 4000 (General Sales)',
      '7. Save Item and test adding it to a draft invoice.',
    ],
    keyPoint:
      'Reusable items ensure consistency across your team, preventing typos and ensuring that identical services are always coded to the same nominal ledger.',
    checklistTitle: 'Inventory Setup Checklist',
    learn: [
      'Create and configure reusable inventory/service items.',
      'Pre-set pricing, default descriptions, and sales nominal codes.',
      'Insert reusable items into sales invoices with a single click.',
    ],
    prev: 208,
    next: 210,
  },

  210: {
    id: 210,
    title: 'Sales & Invoicing Quiz',
    objective: 'Test your understanding of invoice creation, status changes, and reusable item templates.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'When a sales invoice is created and marked as Sent, what immediate change occurs on the QuickFile dashboard?',
        options: [
          'The invoice amount appears under "Owed to you" as an unpaid debtor balance',
          'Money is automatically deposited into your bank account',
          'The customer is automatically deleted',
          'The invoice moves directly to the Trash',
        ],
        correctIndex: 0,
        explanation:
          'When an invoice is issued, QuickFile updates the "Owed to you" total on your dashboard until the invoice is paid and tagged.',
        relatedLecture: 'Lesson 06 - Creating Your First Sales Invoice',
        relatedLessonId: 208,
      },
      {
        id: 2,
        question: 'What is the primary advantage of setting up Reusable Inventory Items in QuickFile?',
        options: [
          'It standardises descriptions, pricing, and nominal codes, speeding up invoice creation',
          'It stops customers from asking for discounts',
          'It allows you to bypass VAT regulations',
          'It automatically emails customers every morning',
        ],
        correctIndex: 0,
        explanation:
          'Reusable items ensure fast, consistent invoice generation with pre-populated prices, descriptions, and account codes.',
        relatedLecture: 'Lesson 07 - Reusable Inventory Items',
        relatedLessonId: 209,
      },
    ],
    body: [
      'Confirm your grasp of sales invoicing principles before tackling business purchases.',
    ],
    prev: 209,
    next: 211,
  },

  211: {
    id: 211,
    displayNumber: '08',
    title: 'Recording Your First Purchase',
    objective: 'Record a supplier bill, capture invoice references and dates, and understand accounts payable.',
    duration: '10:30',
    videoTitle: 'Lesson 08 - Recording Your First Purchase.mp4',
    youtube: 'https://www.youtube.com/watch?v=ujRCeZZP9jw',
    support: 'https://support.quickfile.co.uk/t/recording-purchases/8818',
    body: [
      'Just as sales invoices track money coming in, purchase invoices track money going out to suppliers and vendors.',
      'Recording purchases promptly ensures your business expenses are fully accounted for, allowable tax deductions are claimed, and you have a clear picture of pending bills in the "You Owe" section.',
    ],
    exercise: 'Enter supplier bill from CloudServer Hosting UK Ltd.',
    exerciseDetails: [
      '1. Navigate to Purchases > Create New Purchase.',
      '2. Select Supplier: CloudServer Hosting UK Ltd.',
      '3. Supplier Invoice Reference: CSH-88412.',
      '4. Issue Date: First of the month. Due Date: 14 days later.',
      '5. Description: "Dedicated Cloud Server Hosting - Monthly Tier 2".',
      '6. Net Amount: £85.00 | VAT: 20% (£17.00) | Total Gross: £102.00.',
      '7. Save Purchase as Unpaid.',
    ],
    keyPoint:
      'Always enter the vendor\'s official invoice number in the "Supplier Reference" field so you can cross-reference paper or PDF receipts easily.',
    checklistTitle: 'Purchase Recording Checklist',
    learn: [
      'Create a new purchase invoice in the Purchases menu.',
      'Record vendor invoice references, invoice dates, and due dates.',
      'Understand how unpaid purchases reflect in your "You Owe" dashboard total.',
    ],
    prev: 210,
    next: 212,
  },

  212: {
    id: 212,
    displayNumber: '09',
    title: 'Categorising Your Purchases',
    objective: 'Select appropriate nominal expense categories and understand the difference between overheads and direct costs.',
    duration: '09:50',
    videoTitle: 'Lesson 09 - Categorising Your Purchases.mp4',
    youtube: 'https://www.youtube.com/watch?v=8mG53b8Vf4w',
    support: 'https://support.quickfile.co.uk/t/expense-categorisation/8820',
    body: [
      'Correctly categorising expenses is vital for accurate financial reports and tax compliance. QuickFile groups expenses into two primary types: Cost of Sales (direct costs of delivering client projects) and General Overheads (operational business running costs).',
      'In this lesson, you will learn how to choose the right nominal code (such as Printing & Stationery, Software, Travel, or Telephone) for common everyday expenses.',
    ],
    exercise: 'Review and categorise three typical small business purchases.',
    exerciseDetails: [
      'Categorisation guidelines for Brightside Web Design Ltd:',
      '• Web Hosting & Domains: Direct Project Cost or IT Software overhead (Nominal 7500 / 7550)',
      '• Adobe Creative Cloud Subscription: Software & Licences (Nominal 7550)',
      '• Office Notebooks & Printer Paper: Printing, Postage & Stationery (Nominal 7100)',
      '• Rail ticket to visit client in London: Travelling & Subsistence (Nominal 7400)',
    ],
    keyPoint:
      'Consistent expense categorisation ensures your accountant can prepare year-end tax returns without having to reclassify hundreds of transactions.',
    checklistTitle: 'Expense Categorisation Checklist',
    learn: [
      'Distinguish between Cost of Sales and Operational Overheads.',
      'Locate common expense codes in the QuickFile Chart of Accounts.',
      'Assign the right category during purchase entry.',
    ],
    prev: 211,
    next: 213,
  },

  213: {
    id: 213,
    title: 'Purchases & Expenses Quiz',
    objective: 'Check your knowledge on recording supplier bills, entering references, and categorising costs.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'What is the purpose of entering the "Supplier Reference" when recording a purchase in QuickFile?',
        options: [
          'It records the supplier\'s original invoice number so you can easily match and verify physical or PDF receipts',
          'It sends a secret message to HMRC',
          'It tells the bank how much interest to charge',
          'It changes your company registered address',
        ],
        correctIndex: 0,
        explanation:
          'Entering the supplier\'s invoice number ensures you can quickly match QuickFile entries to physical or digital supplier invoices.',
        relatedLecture: 'Lesson 08 - Recording Your First Purchase',
        relatedLessonId: 211,
      },
      {
        id: 2,
        question: 'Where do unpaid supplier purchases appear on the QuickFile Dashboard?',
        options: [
          'Under the "You owe" widget',
          'Under the "Owed to you" widget',
          'In the Petty Cash tin',
          'Inside the Spam folder',
        ],
        correctIndex: 0,
        explanation:
          'Unpaid supplier bills appear in "You owe", tracking your current trade creditors and upcoming outgoings.',
        relatedLecture: 'Lesson 08 - Recording Your First Purchase',
        relatedLessonId: 211,
      },
    ],
    body: [
      'Review your understanding of purchase records and expense categories.',
    ],
    prev: 212,
    next: 214,
  },

  214: {
    id: 214,
    displayNumber: '10',
    title: 'Understanding the Banking Screen',
    objective: 'Explore the QuickFile Banking screen, bank account ledgers, and statement balance indicators.',
    duration: '09:20',
    videoTitle: 'Lesson 10 - Understanding the Banking Screen.mp4',
    youtube: 'https://www.youtube.com/watch?v=JVHw9VEEH5c',
    support: 'https://support.quickfile.co.uk/t/the-banking-screen/8825',
    body: [
      'The Banking screen is the central hub of QuickFile. Here you see all business bank accounts, payment gateways (like Stripe or PayPal), and cash tins.',
      'Unlike some systems where the bank ledger is separate from the physical statement, QuickFile uses a unified statement-style view. Transactions flow in, and each line is marked as Tagged or Untagged.',
    ],
    exercise: 'Inspect your Current Account and Petty Cash ledgers.',
    exerciseDetails: [
      '1. Navigate to Banking > View Bank Accounts.',
      '2. Locate the default 1200 Current Account and 1230 Petty Cash account.',
      '3. Click into 1200 Current Account to view the transaction ledger.',
      '4. Observe the red Tag me! indicators next to any untagged transactions.',
      '5. Review the Account Settings option where bank name and sort code/account number can be entered.',
    ],
    keyPoint:
      'A transaction in QuickFile is not complete until it has been "Tagged". Tagging tells QuickFile what the money was for.',
    checklistTitle: 'Banking Navigation Checklist',
    learn: [
      'Access the View Bank Accounts overview.',
      'Understand the relationship between bank ledgers and dashboard cash balances.',
      'Recognise the visual difference between Tagged and Untagged bank transactions.',
    ],
    prev: 213,
    next: 215,
  },

  215: {
    id: 215,
    displayNumber: '11',
    title: 'Importing a Bank Statement',
    objective: 'Download, inspect, and upload a CSV bank statement into your QuickFile current account.',
    duration: '11:15',
    videoTitle: 'Lesson 11 - Importing a Bank Statement.mp4',
    youtube: 'https://www.youtube.com/watch?v=ujRCeZZP9jw',
    support: 'https://support.quickfile.co.uk/t/importing-bank-statements/8827',
    body: [
      'If you do not have an automated Open Banking feed or need to catch up on historical records, importing bank statements via CSV (comma-separated values) is fast and reliable.',
      'QuickFile provides a flexible CSV mapping tool that lets you match Date, Description, and In/Out Amount columns regardless of which UK bank format you use.',
    ],
    exercise: 'Import the sample bank statement CSV for Brightside Web Design Ltd.',
    exerciseDetails: [
      '1. Download the sample CSV exercise file from the Resources tab: "Brightside_Sample_Bank_Statement.csv".',
      '2. Inside QuickFile, go to Banking > View Bank Accounts > Current Account (1200).',
      '3. Click Upload a Statement / Import Statement.',
      '4. Select your bank format or choose "Other / Standard CSV".',
      '5. Map Column 1: Date, Column 2: Reference / Details, Column 3: In (+), Column 4: Out (-).',
      '6. Click Import and review the newly created transaction lines.',
    ],
    keyPoint:
      'Always inspect your CSV in a spreadsheet program before uploading to ensure column headers and date formats match QuickFile\'s requirements.',
    checklistTitle: 'CSV Import Checklist',
    learn: [
      'Download and format bank statement CSV files.',
      'Map CSV columns (Date, Description, Amount In, Amount Out).',
      'Handle duplicate transaction prevention during import.',
    ],
    resource: [['Brightside_Sample_Bank_Statement.csv', 'Sample 1-month bank statement CSV file ready for import testing']],
    prev: 214,
    next: 216,
  },

  216: {
    id: 216,
    displayNumber: '12',
    title: 'Open Banking Feeds',
    objective: 'Understand how automated Open Banking feeds work, supported UK banks, and secure connection protocols.',
    duration: '08:40',
    videoTitle: 'Lesson 12 - Open Banking Feeds.mp4',
    youtube: 'https://www.youtube.com/watch?v=8mG53b8Vf4w',
    support: 'https://support.quickfile.co.uk/t/open-banking-feeds/8830',
    body: [
      'Open Banking is a secure UK government initiative that allows FCA-regulated accounting software like QuickFile to connect directly to your bank account with your explicit permission.',
      'Instead of downloading CSV files every week or month, an Open Banking feed automatically fetches yesterday\'s transactions overnight, waiting for you to review and tag them in the morning.',
    ],
    exercise: 'Explore the Open Banking activation screen in QuickFile.',
    exerciseDetails: [
      '1. In your Current Account ledger, locate the Activate Bank Feed button.',
      '2. Review the list of supported major banks (Barclays, NatWest, Lloyds, HSBC, Santander, Starling, Monzo, Tide, and Revolut).',
      '3. Understand consent renewals: For security, UK banking regulations require renewing your Open Banking authorization every 90 days.',
      '4. Learn how to pause or disconnect a feed at any time.',
    ],
    keyPoint:
      'Open Banking connections are read-only: QuickFile can only download transactions; it can never initiate payments or alter your bank account.',
    checklistTitle: 'Open Banking Knowledge Checklist',
    learn: [
      'Understand the read-only security architecture of Open Banking.',
      'Learn how overnight transaction sync works.',
      'Understand the 90-day security re-authorisation cycle mandated by UK banking rules.',
    ],
    prev: 215,
    next: 217,
  },

  217: {
    id: 217,
    title: 'Banking Quiz',
    objective: 'Test your understanding of QuickFile banking, CSV statement imports, and Open Banking feeds.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'What does a red "Tag me!" button indicate next to a transaction in the QuickFile banking screen?',
        options: [
          'The transaction is imported into the bank statement but has not yet been categorised or matched to an invoice',
          'The bank account is overdrawn',
          'The transaction contains an error and must be deleted',
          'The bank has declined payment',
        ],
        correctIndex: 0,
        explanation:
          'The red "Tag me!" label means the transaction is on the bank statement, but QuickFile does not yet know what invoice, supplier, or nominal category it belongs to.',
        relatedLecture: 'Lesson 10 - Understanding the Banking Screen',
        relatedLessonId: 214,
      },
      {
        id: 2,
        question: 'Can a QuickFile Open Banking feed move money or initiate transfers out of your real bank account?',
        options: [
          'No, Open Banking feeds are strictly read-only for retrieving statement transaction data',
          'Yes, QuickFile can spend your money automatically',
          'Only on weekends',
          'Yes, if you forget your password',
        ],
        correctIndex: 0,
        explanation:
          'Open Banking is strictly read-only for accounting software, securely retrieving statement records with no payment initiation capability.',
        relatedLecture: 'Lesson 12 - Open Banking Feeds',
        relatedLessonId: 216,
      },
    ],
    body: [
      'Confirm your banking knowledge before learning how to tag transactions in Section 6.',
    ],
    prev: 216,
    next: 218,
  },

  218: {
    id: 218,
    displayNumber: '13',
    title: 'Tagging Bank Transactions',
    objective: 'Match incoming customer payments to sales invoices and match outgoing payments to purchase invoices.',
    duration: '11:50',
    videoTitle: 'Lesson 13 - Tagging Bank Transactions.mp4',
    youtube: 'https://www.youtube.com/watch?v=JVHw9VEEH5c',
    support: 'https://support.quickfile.co.uk/t/tagging-bank-transactions/8835',
    body: [
      'Tagging is the core bridge between your bank account and your bookkeeping records. When money moves through your bank, you tag each transaction so QuickFile knows its exact purpose.',
      'When you click the red "Tag me!" button, QuickFile presents four standard options: Payment from a customer, Payment to a supplier, Bank transfer between accounts, or Something else not on this list.',
    ],
    exercise: 'Tag client payment and supplier bill for Brightside Web Design Ltd.',
    exerciseDetails: [
      '1. In Current Account (1200), find the incoming credit line of £1,440.00 from Apex Retail Solutions.',
      '2. Click Tag me! > Payment from a customer.',
      '3. QuickFile will display outstanding invoice INV-001 (£1,440.00). Click Match to Invoice.',
      '4. Observe the invoice status change from Unpaid to PAID.',
      '5. Find the outgoing debit of £102.00 to CloudServer Hosting.',
      '6. Click Tag me! > Payment to a supplier > Match to unpaid purchase CSH-88412.',
    ],
    keyPoint:
      'Matching payments to existing invoices avoids duplicate entries and automatically marks invoices as PAID.',
    checklistTitle: 'Tagging Practice Checklist',
    learn: [
      'Click Tag me! on incoming bank receipts and match to sales invoices.',
      'Click Tag me! on outgoing bank payments and match to supplier purchases.',
      'Verify that matched invoices and purchases switch to Paid status automatically.',
    ],
    prev: 217,
    next: 219,
  },

  219: {
    id: 219,
    displayNumber: '14',
    title: 'Putting It All Together',
    objective: 'Tag direct bank payments, categorise expenses without invoices, and record internal bank transfers.',
    duration: '12:10',
    videoTitle: 'Lesson 14 - Putting It All Together.mp4',
    youtube: 'https://www.youtube.com/watch?v=ujRCeZZP9jw',
    support: 'https://support.quickfile.co.uk/t/bank-transfers-and-direct-tagging/8838',
    body: [
      'Not every bank transaction requires creating a full supplier invoice first. Routine expenses like monthly bank account fees, debit card coffees, or parking tickets can be tagged directly to a nominal expense code in seconds.',
      'Furthermore, moving money from your business Current Account to your Business Savings account or Petty Cash is simply an internal transfer—it is neither income nor an expense.',
    ],
    exercise: 'Tag direct expense and bank transfer for Brightside Web Design.',
    exerciseDetails: [
      '1. Find the outgoing line of £6.50: "Monthly Bank Service Fee".',
      '2. Click Tag me! > Something else not on this list.',
      '3. Select Category: Bank Charges (Nominal Code 7901). Enter Description and Save.',
      '4. Find the outgoing line of £500.00: "Transfer to Business Reserve".',
      '5. Click Tag me! > Transfer between accounts > Select Business Reserve (1210).',
      '6. Verify that £500.00 leaves 1200 Current Account and appears in 1210 Business Reserve automatically.',
    ],
    keyPoint:
      'Transfers between bank accounts must always be tagged as "Transfer between accounts" so that QuickFile records both sides of the movement with zero profit & loss impact.',
    checklistTitle: 'Connected Workflow Checklist',
    learn: [
      'Tag direct expenses without an existing supplier bill (Something else not on this list).',
      'Record internal bank transfers between accounts without distorting profits.',
      'Observe how the complete end-to-end cycle ties invoices, bills, and bank statements together.',
    ],
    prev: 218,
    next: 220,
  },

  220: {
    id: 220,
    title: 'Bank Tagging Quiz',
    objective: 'Test your mastery of matching customer receipts, paying supplier bills, and recording bank transfers.',
    duration: '05:00',
    isQuiz: true,
    quizQuestions: [
      {
        id: 1,
        question: 'When a customer pays an existing sales invoice into your bank account, which tagging option should you choose?',
        options: [
          'Payment from a customer, then select the matching unpaid invoice',
          'Something else not on the list as General Sales (4000)',
          'Transfer between accounts',
          'Payment to a supplier',
        ],
        correctIndex: 0,
        explanation:
          'Selecting "Payment from a customer" and matching the invoice marks the existing invoice as Paid and prevents duplicating your sales revenue.',
        relatedLecture: 'Lesson 13 - Tagging Bank Transactions',
        relatedLessonId: 218,
      },
      {
        id: 2,
        question: 'When you transfer £500 from your business Current Account to your business Savings Account, what option should you choose?',
        options: [
          'Transfer between accounts, selecting the destination savings account',
          'Payment from a customer',
          'General business expense',
          'Cost of Sales',
        ],
        correctIndex: 0,
        explanation:
          'An internal transfer simply moves funds between two asset accounts owned by your business, without affecting turnover or expenses.',
        relatedLecture: 'Lesson 14 - Putting It All Together',
        relatedLessonId: 219,
      },
    ],
    body: [
      'Ensure you are comfortable with bank tagging rules before the practical final exercise.',
    ],
    prev: 219,
    next: 221,
  },

  221: {
    id: 221,
    displayNumber: '15',
    title: 'Practical Bookkeeping Exercise',
    objective: 'Apply the entire QuickFile Basics workflow in an end-to-end continuous exercise for Brightside Web Design Ltd.',
    duration: '14:30',
    videoTitle: 'Lesson 15 - Practical Bookkeeping Exercise.mp4',
    youtube: 'https://www.youtube.com/watch?v=8mG53b8Vf4w',
    support: 'https://support.quickfile.co.uk/',
    body: [
      'Congratulations on reaching Section 7! In this comprehensive practical exercise, you will put everything you have learned together by completing a full monthly bookkeeping cycle for Brightside Web Design Ltd.',
      'You will add a new client, raise an invoice, record a supplier bill, upload a 5-line bank statement, tag all transactions, and verify that your dashboard numbers match the expected closing balance.',
    ],
    exercise: 'Complete the 6-step practical bookkeeping cycle.',
    exerciseDetails: [
      'Step 1: Add new client "Beacon Marketing Ltd" (payment terms: 14 days).',
      'Step 2: Create and send invoice INV-002 for "Brand Identity & SEO Audit" — Net: £650.00 | VAT: 20% (£130.00) | Total: £780.00.',
      'Step 3: Add supplier "Shutterstock Images" and log purchase bill for £45.00 (Nominal 7500 Advertising & Promotion).',
      'Step 4: Upload bank statement lines for the week (available in Resources).',
      'Step 5: Tag Beacon Marketing invoice payment (+£780.00) and Shutterstock payment (-£45.00).',
      'Step 6: Tag £10.00 monthly bank charge to Nominal 7901.',
    ],
    expectedResult: {
      description: 'Upon completing all steps and tagging all lines, your QuickFile training account should show:',
      groups: [
        {
          category: 'Bank Account Balance (1200 Current Account)',
          items: ['Expected Closing Balance: £2,063.50', 'Untagged transactions remaining: 0 (All Tagged)'],
        },
        {
          category: 'Dashboard Debtor & Creditor Balances',
          items: ['Owed to you: £0.00 (All invoices paid)', 'You owe: £0.00 (All supplier bills paid)'],
        },
      ],
    },
    keyPoint:
      'When all transactions are tagged and invoices matched, your dashboard reflects your true real-time cash and financial position.',
    checklistTitle: 'Practical Exercise Checkpoints',
    learn: [
      'Create clients and suppliers from scratch.',
      'Draft and issue compliant sales invoices.',
      'Record supplier expenses and verify nominal codes.',
      'Import bank statements and achieve 100% tagged status with zero untagged lines remaining.',
    ],
    prev: 220,
    next: 222,
  },

  222: {
    id: 222,
    title: 'Final Course Assessment',
    objective: 'Complete the 10-question final knowledge exam to test your overall understanding of QuickFile Basics.',
    duration: '10:00',
    isQuiz: true,
    assessment: true,
    quizQuestions: [
      {
        id: 1,
        question: 'What is the primary role of the QuickFile Dashboard?',
        options: [
          'To give an immediate visual overview of cash balances, outstanding invoices (owed to you), and unpaid bills (you owe)',
          'To browse social media posts',
          'To replace your email inbox',
          'To automatically file your personal tax return without reviewing',
        ],
        correctIndex: 0,
        explanation:
          'The QuickFile dashboard provides real-time financial metrics including debtors, creditors, cash balances, and monthly turnover.',
        relatedLecture: 'Lesson 03 - Navigating QuickFile',
        relatedLessonId: 203,
      },
      {
        id: 2,
        question: 'Where do you set default payment terms (e.g. 30 days) for a customer so future invoices calculate due dates automatically?',
        options: [
          'On the individual Client record in the Sales menu',
          'In the system browser cache',
          'On the bank statement import screen',
          'Inside the Petty Cash account settings',
        ],
        correctIndex: 0,
        explanation:
          'Default payment terms are configured on each client profile under Sales > View All Clients.',
        relatedLecture: 'Lesson 04 - Adding Your First Client',
        relatedLessonId: 205,
      },
      {
        id: 3,
        question: 'Why should you create Reusable Inventory Items in QuickFile?',
        options: [
          'To standardise pricing, descriptions, and sales nominal codes for quick, consistent invoicing',
          'To prevent customers from opening your invoices',
          'To bypass the standard 20% VAT rate',
          'To hide project descriptions from your accountant',
        ],
        correctIndex: 0,
        explanation:
          'Reusable inventory items save time and prevent coding inconsistencies across sales invoices.',
        relatedLecture: 'Lesson 07 - Reusable Inventory Items',
        relatedLessonId: 209,
      },
      {
        id: 4,
        question: 'When entering a supplier purchase bill, what field should contain the vendor’s own invoice reference number?',
        options: [
          'Supplier Reference',
          'Company Registration Number',
          'Sort Code',
          'Password',
        ],
        correctIndex: 0,
        explanation:
          'The Supplier Reference field stores the vendor’s bill number so you can reconcile paper and PDF documents.',
        relatedLecture: 'Lesson 08 - Recording Your First Purchase',
        relatedLessonId: 211,
      },
      {
        id: 5,
        question: 'What is the difference between Cost of Sales and General Overheads?',
        options: [
          'Cost of Sales are direct costs related to delivering goods/services, whereas Overheads are ongoing operational expenses',
          'Cost of Sales are illegal expenses',
          'Overheads only apply to sole traders',
          'There is no difference in QuickFile',
        ],
        correctIndex: 0,
        explanation:
          'Cost of Sales represents direct project expenses; Overheads represent general operational running costs like rent, software, and insurance.',
        relatedLecture: 'Lesson 09 - Categorising Your Purchases',
        relatedLessonId: 212,
      },
      {
        id: 6,
        question: 'What is the primary file format used when manually importing historical bank statements into QuickFile?',
        options: [
          'CSV (Comma Separated Values)',
          'MP4 video file',
          'PNG graphic',
          'EXE executable file',
        ],
        correctIndex: 0,
        explanation:
          'QuickFile accepts standard bank statement CSV files for flexible manual statement imports.',
        relatedLecture: 'Lesson 11 - Importing a Bank Statement',
        relatedLessonId: 215,
      },
      {
        id: 7,
        question: 'Are QuickFile Open Banking feeds capable of withdrawing funds or executing payments from your bank account?',
        options: [
          'No, Open Banking feeds are strictly read-only for retrieving statement transactions securely',
          'Yes, they can make payments whenever they want',
          'Yes, but only under £50',
          'Only with written permission from HMRC',
        ],
        correctIndex: 0,
        explanation:
          'Open Banking feeds are read-only feeds certified under UK banking regulations for statement data retrieval.',
        relatedLecture: 'Lesson 12 - Open Banking Feeds',
        relatedLessonId: 216,
      },
      {
        id: 8,
        question: 'What happens to a sales invoice when you tag an incoming bank payment and match it to that invoice?',
        options: [
          'The invoice status automatically updates from Unpaid (Sent) to PAID',
          'The invoice is permanently deleted',
          'A duplicate invoice is created',
          'The client account is closed',
        ],
        correctIndex: 0,
        explanation:
          'Matching an incoming bank line to an invoice clears the outstanding balance and marks the invoice as PAID.',
        relatedLecture: 'Lesson 13 - Tagging Bank Transactions',
        relatedLessonId: 218,
      },
      {
        id: 9,
        question: 'How should a transfer of funds from your Business Current Account to your Business Savings Account be tagged in QuickFile?',
        options: [
          'Tag me! > Transfer between accounts',
          'Tag me! > Payment from a customer',
          'Tag me! > Something else not on this list as General Sales',
          'Leave it untagged forever',
        ],
        correctIndex: 0,
        explanation:
          'Internal movements between company bank accounts should always be tagged as "Transfer between accounts".',
        relatedLecture: 'Lesson 14 - Putting It All Together',
        relatedLessonId: 219,
      },
      {
        id: 10,
        question: 'What does having zero untagged transactions and zero overdue debtor/creditor balances mean in QuickFile?',
        options: [
          'Your books are completely up to date with all bank movements matched to invoices, expenses, or transfers',
          'Your account has been suspended',
          'You need to delete your company',
          'Your bank feed has broken',
        ],
        correctIndex: 0,
        explanation:
          'Having all transactions tagged means every bank movement has been properly accounted for, providing accurate financial reports.',
        relatedLecture: 'Lesson 15 - Practical Bookkeeping Exercise',
        relatedLessonId: 221,
      },
    ],
    body: [
      'Test your understanding across all 6 core bookkeeping modules covered in QuickFile Basics.',
      'Achieve 80% or higher to successfully pass the QuickFile Basics end-of-course assessment.',
    ],
    prev: 221,
    next: 223,
  },

  223: {
    id: 223,
    displayNumber: '16',
    title: 'Course Completion & Next Steps',
    objective: 'Review your achievements, verify your bookkeeping skills, and discover recommended next courses.',
    duration: '04:45',
    videoTitle: 'Lesson 16 - Course Completion & Next Steps.mp4',
    youtube: 'https://www.youtube.com/watch?v=JVHw9VEEH5c',
    support: 'https://community.quickfile.co.uk/',
    body: [
      'Congratulations on completing QuickFile Basics: Bookkeeping for Beginners! You now have a solid understanding of everyday bookkeeping: navigating QuickFile, managing clients and suppliers, creating sales invoices, logging purchase bills, importing bank statements, and tagging transactions accurately.',
      'You are now equipped to manage your own day-to-day business finances or transition smoothly into live bookkeeping with total confidence.',
      'Whenever you have questions or encounter unusual accounting scenarios, remember that the QuickFile Community Forum and Support Knowledgebase are active and ready to help.',
    ],
    exercise: 'Review your completed workflow and explore next learning pathways.',
    exerciseDetails: [
      'Recommended Next Steps:',
      '1. Open the Assessment tab above to test your knowledge with the course assessment.',
      '2. Explore "QuickFile Essentials" to learn about recurring automated invoices, banking rules, and account customisation.',
      '3. When your business grows, advance to "QuickFile Advanced Bookkeeping & Year-End" for nominal journals, MTD VAT returns, and depreciation.',
      '4. Bookmark the QuickFile Community at community.quickfile.co.uk for free peer support.',
    ],
    keyPoint:
      'Bookkeeping is best managed little and often. Spending 10 minutes every week tagging bank transactions keeps your numbers pristine and eliminates tax season panic.',
    checklistTitle: 'Course Graduation Checklist',
    learn: [
      'Understand the full end-to-end beginner bookkeeping cycle in QuickFile.',
      'Know where to access community help and official documentation.',
      'Identify the right time to progress to QuickFile Essentials or Advanced Bookkeeping.',
    ],
    prev: 222,
    next: undefined,
  },
};

export const COURSE_BASICS_QUIZ_QUESTIONS: QuizQuestionItem[] = COURSE_BASICS_LESSONS[222].quizQuestions || [];

export const COURSE_BASICS_PRACTICAL_CHECKS: PracticalCheck[] = [
  {
    id: 1,
    title: 'Create Client: Apex Retail Solutions Ltd',
    desc: 'Add customer with 30-day payment terms, billing email, and Manchester address.',
  },
  {
    id: 2,
    title: 'Create Supplier: CloudServer Hosting UK Ltd',
    desc: 'Set up vendor with default expense category for Web Hosting & Domains.',
  },
  {
    id: 3,
    title: 'Raise Sales Invoice: INV-001',
    desc: 'Generate £1,200.00 (+20% VAT = £1,440.00 gross) invoice and mark as Sent.',
  },
  {
    id: 4,
    title: 'Enter Purchase Bill: CSH-88412',
    desc: 'Record £85.00 (+20% VAT = £102.00 gross) cloud hosting purchase from CloudServer.',
  },
  {
    id: 5,
    title: 'Import Bank Statement CSV',
    desc: 'Upload sample monthly CSV statement into Current Account (1200).',
  },
  {
    id: 6,
    title: 'Tag Customer Receipt & Supplier Payment',
    desc: 'Match £1,440.00 bank receipt to INV-001 and £102.00 payment to CSH-88412.',
  },
  {
    id: 7,
    title: 'Tag Direct Expense & Bank Transfer',
    desc: 'Tag £6.50 bank charge (Nominal 7901) and transfer £500.00 to Business Reserve.',
  },
];

export const COURSE_BASICS_RESOURCES: CourseResource[] = [
  {
    id: 6,
    title: 'Resource - Business Profile.xlsx',
    url: '#download-business-profile',
    size: '3.9 kB',
    type: 'XLSX',
    lesson: 202,
  },
  {
    id: 1,
    title: 'Brightside_Sample_Bank_Statement.csv',
    url: '#',
    size: '12 kB',
    type: 'CSV',
    lesson: 215,
  },
  {
    id: 2,
    title: 'Brightside_Sample_Sales_Invoice_INV001.pdf',
    url: '#',
    size: '48 kB',
    type: 'PDF',
    lesson: 208,
  },
  {
    id: 3,
    title: 'Brightside_Supplier_Bill_CloudServer.pdf',
    url: '#',
    size: '42 kB',
    type: 'PDF',
    lesson: 211,
  },
  {
    id: 4,
    title: 'QuickFile_Beginners_Bookkeeping_Cheat_Sheet.pdf',
    url: '#',
    size: '85 kB',
    type: 'PDF',
    lesson: 201,
  },
  {
    id: 5,
    title: 'Lesson_15_Practical_Exercise_Brief.pdf',
    url: '#',
    size: '64 kB',
    type: 'PDF',
    lesson: 221,
  },
];
