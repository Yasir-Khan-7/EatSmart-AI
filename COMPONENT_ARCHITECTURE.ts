// Component Architecture for EatSmart AI Landing Page - First Section

/**
 * COMPONENT HIERARCHY
 * ===================
 * 
 * app/
 * └── page.tsx (Main Landing Page)
 *     ├── Header.tsx
 *     │   ├── Logo
 *     │   ├── Navigation Menu
 *     │   │   ├── Recipes Link
 *     │   │   ├── Blog Link
 *     │   │   └── Customer Support Link
 *     │   └── Action Buttons
 *     │       ├── Log In Button
 *     │       └── Start For Free Button
 *     │
 *     └── Hero Section
 *         ├── Decorative Icons (absolute positioned)
 *         │   ├── Shopping Cart Icon (lime green circle)
 *         │   ├── Decorative Square Border
 *         │   ├── Vegetable Icon Circle
 *         │   └── Dark Green Circle
 *         │
 *         ├── Main Content Grid (3 columns)
 *         │   ├── Left Column
 *         │   │   └── StatCard (95% Improved Eating Habits)
 *         │   │
 *         │   ├── Center Column
 *         │   │   ├── Main Headline
 *         │   │   ├── Subheading
 *         │   │   ├── CTA Buttons
 *         │   │   │   ├── Try Our Demo (outlined)
 *         │   │   │   └── Start For Free (filled)
 *         │   │   └── Food Bowl Image
 *         │   │
 *         │   └── Right Column
 *         │       └── Garden Plants Image
 *         │
 *         └── Bottom Stats Row (2 columns)
 *             ├── Happy Users Card (30,000+)
 *             └── StatCard (25% Saved on Groceries)
 */

/**
 * COMPONENT PROPS
 * ===============
 * 
 * StatCard Component:
 * -------------------
 * interface StatCardProps {
 *   value: string;        // e.g., "95%", "30 000 +"
 *   label: string;        // e.g., "Improved Eating Habits"
 *   image?: string;       // Optional image path
 *   className?: string;   // Optional additional styling
 * }
 * 
 * Usage Examples:
 * <StatCard value="95%" label="Improved Eating Habits" image="/images/green-bag.svg" />
 * <StatCard value="25%" label="Saved on Groceries" image="/images/grocery-bag.svg" />
 */

/**
 * STYLING APPROACH
 * ================
 * 
 * Color Variables (from globals.css):
 * --background: #f5f4f0    (Light cream background)
 * --foreground: #2d3e30    (Dark forest green text)
 * --primary: #d4f542       (Lime green accent)
 * --dark-green: #2d3e30    (Dark green for buttons/cards)
 * 
 * Tailwind Classes Used:
 * - bg-[#f5f4f0]     Background color
 * - bg-[#2d3e30]     Dark green backgrounds
 * - bg-[#d4f542]     Lime green backgrounds
 * - text-[#2d3e30]   Text color
 * - rounded-full     Circular buttons
 * - rounded-3xl      Card border radius
 * 
 * Responsive Breakpoints:
 * - sm:  640px   (Small devices)
 * - md:  768px   (Medium devices)
 * - lg:  1024px  (Large devices)
 */

/**
 * LAYOUT STRUCTURE
 * ================
 * 
 * Desktop Layout (lg: screens):
 * ┌─────────────────────────────────────────────────┐
 * │  Header (full width)                            │
 * ├─────────────────────────────────────────────────┤
 * │  🛒                                        🥕   │
 * │  ┌────────┐                                     │
 * │  │  95%   │        MAIN HEADLINE         ┌─────┐│
 * │  │  Card  │                              │Plant││
 * │  └────────┘     Subheading & CTAs        │Image││
 * │                                           └─────┘│
 * │              [Food Bowl Image]                  │
 * │                                                  │
 * │       ┌───────────────┐  ┌──────────┐          │
 * │       │  30,000+      │  │   25%    │          │
 * │       │  Happy Users  │  │   Card   │          │
 * │       └───────────────┘  └──────────┘          │
 * └─────────────────────────────────────────────────┘
 * 
 * Mobile Layout (< md screens):
 * ┌────────────────┐
 * │  Header        │
 * ├────────────────┤
 * │  MAIN          │
 * │  HEADLINE      │
 * │                │
 * │  Subheading    │
 * │                │
 * │  [Try Demo]    │
 * │  [Start Free]  │
 * │                │
 * │  [Food Image]  │
 * │                │
 * │  [95% Card]    │
 * │                │
 * │  [30K Card]    │
 * │                │
 * │  [25% Card]    │
 * │                │
 * │  [Plant Image] │
 * └────────────────┘
 */

/**
 * IMAGES MAPPING
 * ==============
 * 
 * Location: /public/images/
 * 
 * Current (Placeholder):          Needed from Figma:
 * - food-bowl.svg         →       food-bowl.jpg
 * - grocery-bag.svg       →       grocery-bag.jpg
 * - green-bag.svg         →       green-bag.jpg
 * - garden-plants.svg     →       garden-plants.jpg
 * 
 * Image Dimensions (Recommended):
 * - food-bowl: 400x300px (aspect ratio 4:3)
 * - grocery-bag: 300x300px (square)
 * - green-bag: 300x300px (square)
 * - garden-plants: 400x400px (square)
 */

/**
 * INTERACTIVE ELEMENTS
 * ====================
 * 
 * Buttons:
 * 1. Header "Log In" - Text button with hover state
 * 2. Header "Start For Free" - Dark green filled, white text
 * 3. Hero "Try Our Demo" - Outlined button with hover fill
 * 4. Hero "Start For Free" - Lime green filled button
 * 
 * Hover States:
 * - Buttons: Color transitions (transition-all, transition-colors)
 * - Links: Opacity change (hover:text-[#2d3e30]/70)
 * 
 * Transitions:
 * - All interactive elements use smooth transitions
 * - Duration: Default Tailwind timing (~150ms)
 */

/**
 * ACCESSIBILITY FEATURES
 * ======================
 * 
 * - Semantic HTML elements (<header>, <main>, <nav>)
 * - Descriptive alt text for images (when real images added)
 * - Proper heading hierarchy (h1 for main headline)
 * - Sufficient color contrast ratios
 * - Keyboard-accessible buttons and links
 * - Responsive text sizing
 */

export {};



