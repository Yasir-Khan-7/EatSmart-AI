# EatSmart AI - Landing Page

> 🚀 **NEW HERE?** Start with **[START_HERE.md](./START_HERE.md)** for a quick overview!

## Project Overview
This is a Next.js project for the EatSmart AI landing page, built based on the Figma design provided.

**Current Status**: ✅ First Section (Hero) Complete and Ready for Review

## What's Been Completed - First Section (Hero)

### ✅ Project Setup
- Next.js 15 with TypeScript
- Tailwind CSS configured
- App Router structure

### ✅ Components Created

#### 1. Header Component (`app/components/Header.tsx`)
- Logo with circular design (dark green with lime accent)
- Navigation links: Recipes, Blog, Customer Support
- Action buttons: Log In, Start For Free
- Responsive design with mobile considerations

#### 2. Hero Section (`app/page.tsx`)
- Main headline: "Elevate Your Mealtime with AI-Powered Personalization"
- Subheading: "Effortless Planning, Healthier Eating"
- Two CTA buttons: "Try Our Demo" and "Start For Free"
- Decorative elements and icons scattered around the layout

#### 3. StatCard Component (`app/components/StatCard.tsx`)
- Reusable component for statistics display
- Supports optional images
- Used for displaying key metrics

### ✅ Statistics Cards Displayed
1. **95%** - Improved Eating Habits (with green bag image)
2. **30,000+** - Happy Users (dark green card with lime green text)
3. **25%** - Saved on Groceries (with grocery bag image)

### 🎨 Design Details Implemented

#### Color Scheme
- Background: `#f5f4f0` (light beige/cream)
- Primary Brand: `#d4f542` (lime green)
- Dark Green: `#2d3e30` (dark forest green)
- Text: Dark green with opacity variations

#### Layout Structure
- Responsive grid layout
- Center-focused hero content
- Statistics cards on sides and bottom
- Decorative icons positioned absolutely

### 📁 Project Structure
```
EatSmart-AI/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   └── StatCard.tsx     # Statistics card component
│   ├── globals.css          # Global styles with custom colors
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── public/
│   └── images/
│       ├── README.md        # Image export instructions
│       ├── food-bowl.svg    # Placeholder - needs real image
│       ├── grocery-bag.svg  # Placeholder - needs real image
│       ├── green-bag.svg    # Placeholder - needs real image
│       └── garden-plants.svg # Placeholder - needs real image
└── package.json
```

### 🖼️ Images Needed
The following images need to be exported from Figma and placed in `public/images/`:

1. **food-bowl.jpg** - Healthy food bowl with greens and protein
2. **grocery-bag.jpg** - White paper grocery bag with vegetables
3. **green-bag.svg** - Green reusable shopping bag
4. **garden-plants.jpg** - Person with garden plants/herbs

*Note: Placeholder SVG files have been created. Replace with actual images from Figma for production.*

## Running the Project

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Next Steps
Once you approve this first section, we can proceed with:
1. Additional sections from the Figma design
2. Animations and interactions
3. Mobile responsiveness refinement
4. Real image integration from Figma

## Technologies Used
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

## Notes
- All components are server components by default (Next.js 15)
- Responsive design implemented with Tailwind breakpoints
- Clean, semantic HTML structure
- Accessible button and link elements
