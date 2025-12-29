/*
 * ========================================================================
 *                    EATSMART AI - FIRST SECTION
 *                         VISUAL PREVIEW
 * ========================================================================
 */

// ╔════════════════════════════════════════════════════════════════════╗
// ║                         DESKTOP VIEW                                ║
// ╚════════════════════════════════════════════════════════════════════╝

/*

   ┌──────────────────────────────────────────────────────────────────┐
   │                      NAVIGATION HEADER                            │
   │  ┌──┐                                                             │
   │  │◉◉│ EatSmart  Recipes  Blog  Support    [Log In] [Start Free]  │
   │  └──┘                                                             │
   └──────────────────────────────────────────────────────────────────┘
   
   ┌──────────────────────────────────────────────────────────────────┐
   │                         HERO SECTION                              │
   │                                                                   │
   │  🛒                                                         ◻️   │
   │                                                                   │
   │ ┏━━━━━━━┓                                           ┏━━━━━━━┓   │
   │ ┃       ┃                                           ┃       ┃   │
   │ ┃ [img] ┃        Elevate Your Mealtime              ┃[plant]┃   │
   │ ┃       ┃        with AI-Powered                    ┃       ┃   │
   │ ┃ 95%   ┃        Personalization                    ┃ [img] ┃   │
   │ ┃       ┃                                           ┃       ┃   │
   │ ┃Eating ┃     Effortless Planning,                 ┃       ┃   │
   │ ┃Habits ┃     Healthier Eating                     ┃       ┃   │
   │ ┗━━━━━━━┛                                           ┗━━━━━━━┛   │
   │                                                                   │
   │              ┌──────────────┐  ┌──────────────┐                 │
   │              │ Try Our Demo │  │Start For Free│                 │
   │              └──────────────┘  └──────────────┘                 │
   │                                                                   │
   │                    ╔═════════════════╗                           │
   │                    ║                 ║                           │
   │                    ║   [Food Bowl]   ║                           │
   │                    ║                 ║                           │
   │                    ╚═════════════════╝                           │
   │                                                                   │
   │        ┏━━━━━━━━━━━━━━━┓         ┏━━━━━━━━━━┓                  │
   │        ┃                ┃         ┃          ┃                  │
   │        ┃   30 000 +     ┃         ┃  [img]   ┃                  │
   │        ┃                ┃         ┃          ┃                  │
   │        ┃  Happy Users   ┃         ┃   25%    ┃                  │
   │        ┃                ┃         ┃          ┃                  │
   │        ┃  (Dark Green)  ┃         ┃ Groceries┃                  │
   │        ┗━━━━━━━━━━━━━━━┛         ┗━━━━━━━━━━┛                  │
   │                                                            ⚫    │
   └──────────────────────────────────────────────────────────────────┘

*/

// ╔════════════════════════════════════════════════════════════════════╗
// ║                          MOBILE VIEW                                ║
// ╚════════════════════════════════════════════════════════════════════╝

/*

   ┌─────────────────────┐
   │ ┌──┐                │
   │ │◉◉│ EatSmart       │
   │ └──┘      [Start]   │
   └─────────────────────┘
   
   ┌─────────────────────┐
   │                     │
   │   Elevate Your      │
   │   Mealtime with     │
   │   AI-Powered        │
   │   Personalization   │
   │                     │
   │  Effortless         │
   │  Planning,          │
   │  Healthier Eating   │
   │                     │
   │ ┌─────────────────┐ │
   │ │ Try Our Demo    │ │
   │ └─────────────────┘ │
   │ ┌─────────────────┐ │
   │ │ Start For Free  │ │
   │ └─────────────────┘ │
   │                     │
   │   ┏━━━━━━━━━━━┓    │
   │   ┃           ┃    │
   │   ┃ Food Bowl ┃    │
   │   ┃           ┃    │
   │   ┗━━━━━━━━━━━┛    │
   │                     │
   │ ┏━━━━━━━━━━━━━━┓   │
   │ ┃   [img] 95%  ┃   │
   │ ┃   Improved   ┃   │
   │ ┗━━━━━━━━━━━━━━┛   │
   │                     │
   │ ┏━━━━━━━━━━━━━━┓   │
   │ ┃  30 000 +    ┃   │
   │ ┃ Happy Users  ┃   │
   │ ┗━━━━━━━━━━━━━━┛   │
   │                     │
   │ ┏━━━━━━━━━━━━━━┓   │
   │ ┃   [img] 25%  ┃   │
   │ ┃   Saved      ┃   │
   │ ┗━━━━━━━━━━━━━━┛   │
   │                     │
   │   ┏━━━━━━━━━━━┓    │
   │   ┃  Plants   ┃    │
   │   ┗━━━━━━━━━━━┛    │
   │                     │
   └─────────────────────┘

*/

// ╔════════════════════════════════════════════════════════════════════╗
// ║                        COLOR PALETTE                                ║
// ╚════════════════════════════════════════════════════════════════════╝

const colors = {
  background: '#f5f4f0',    // Light cream background
  primary: '#d4f542',        // Lime green (CTAs, accents)
  dark: '#2d3e30',          // Forest green (text, header)
  white: '#ffffff',          // White (cards)
  textPrimary: '#2d3e30',   // Dark green text
  textSecondary: 'rgba(45, 62, 48, 0.7)', // Lighter text
};

// ╔════════════════════════════════════════════════════════════════════╗
// ║                        COMPONENTS USED                              ║
// ╚════════════════════════════════════════════════════════════════════╝

const components = {
  Header: {
    file: 'app/components/Header.tsx',
    props: null,
    description: 'Navigation header with logo, menu, and action buttons',
    features: [
      'Logo with circular design',
      'Navigation links (Recipes, Blog, Support)',
      'Log In button',
      'Start For Free CTA button',
      'Responsive (hides nav on mobile)',
    ]
  },
  
  StatCard: {
    file: 'app/components/StatCard.tsx',
    props: {
      value: 'string (e.g., "95%")',
      label: 'string (e.g., "Improved Eating Habits")',
      image: 'string (optional image path)',
      className: 'string (optional additional classes)',
    },
    description: 'Reusable statistics card component',
    features: [
      'Display percentage or number',
      'Optional image at top',
      'White background with shadow',
      'Rounded corners (rounded-3xl)',
    ]
  },
  
  HeroSection: {
    file: 'app/page.tsx',
    description: 'Main landing page hero section',
    features: [
      'Main headline (4xl-6xl)',
      'Subheading',
      'Two CTA buttons',
      'Decorative icons (absolute positioned)',
      'Grid layout (3 columns on desktop)',
      'Statistics cards integration',
      'Food bowl image',
      'Garden plants image',
    ]
  }
};

// ╔════════════════════════════════════════════════════════════════════╗
// ║                         RESPONSIVE GRID                             ║
// ╚════════════════════════════════════════════════════════════════════╝

const gridLayout = {
  desktop: {
    totalColumns: 12,
    leftColumn: 3,    // StatCard (95%)
    centerColumn: 6,  // Hero content
    rightColumn: 3,   // Plants image
    bottomRow: [6, 6] // Two cards at 50% each
  },
  
  tablet: {
    columns: 1,       // Stacked layout
    order: [
      'Header',
      'Headline',
      'Subheading',
      'CTAs',
      'Food Image',
      'Stats Cards',
      'Plants Image'
    ]
  },
  
  mobile: {
    columns: 1,       // Full width
    padding: 'px-4',  // Less padding on sides
  }
};

// ╔════════════════════════════════════════════════════════════════════╗
// ║                      INTERACTIVE ELEMENTS                           ║
// ╚════════════════════════════════════════════════════════════════════╝

const interactiveElements = [
  {
    element: 'Try Our Demo Button',
    style: 'Outlined (border-2 border-dark)',
    hover: 'Fills with dark green, text becomes white',
    transition: 'transition-all',
  },
  {
    element: 'Start For Free Button',
    style: 'Filled (bg-lime-green)',
    hover: 'Slightly darker lime green',
    transition: 'transition-all',
  },
  {
    element: 'Navigation Links',
    style: 'Text links',
    hover: 'Opacity reduces to 70%',
    transition: 'transition-colors',
  },
  {
    element: 'Log In Button',
    style: 'Text button',
    hover: 'Opacity reduces to 70%',
    transition: 'transition-colors',
  },
  {
    element: 'Header Start Button',
    style: 'Filled (bg-dark-green, text-white)',
    hover: 'Slightly lighter',
    transition: 'transition-colors',
  }
];

// ╔════════════════════════════════════════════════════════════════════╗
// ║                         FILE STRUCTURE                              ║
// ╚════════════════════════════════════════════════════════════════════╝

const fileStructure = `
EatSmart-AI/
├── app/
│   ├── components/
│   │   ├── Header.tsx         ✅ Navigation component
│   │   └── StatCard.tsx       ✅ Statistics card component
│   ├── globals.css            ✅ Global styles + brand colors
│   ├── layout.tsx             ✅ Root layout
│   └── page.tsx               ✅ Main hero section
├── public/
│   └── images/
│       ├── food-bowl.svg      📸 Placeholder (needs Figma export)
│       ├── grocery-bag.svg    📸 Placeholder (needs Figma export)
│       ├── green-bag.svg      📸 Placeholder (needs Figma export)
│       └── garden-plants.svg  📸 Placeholder (needs Figma export)
├── DELIVERY_SUMMARY.md        📖 Complete project summary
├── QUICK_START.md             🚀 How to run the project
├── README.md                  📄 Project documentation
└── package.json               ⚙️ Dependencies and scripts
`;

// ╔════════════════════════════════════════════════════════════════════╗
// ║                            STATUS                                   ║
// ╚════════════════════════════════════════════════════════════════════╝

const status = {
  projectSetup: '✅ Complete',
  headerComponent: '✅ Complete',
  statCardComponent: '✅ Complete',
  heroSection: '✅ Complete',
  responsiveDesign: '✅ Complete',
  colorScheme: '✅ Complete',
  typography: '✅ Complete',
  documentation: '✅ Complete',
  imagesExported: '⏳ Pending (user action)',
  readyForReview: '✅ YES',
  readyForNextSection: '⏳ Awaiting approval'
};

export { colors, components, gridLayout, interactiveElements, fileStructure, status };

