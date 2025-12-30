# How to Export Images from Figma

## Step-by-Step Guide

### 1. Open the Figma Design
Open this link in your browser:
https://www.figma.com/design/Hy3gRk7AksmgvDuRVCVLwj/Untitled?node-id=1-34&t=YMJM1T79JApEDMqA-4

### 2. Export Each Image

#### Image 1: Food Bowl (food-bowl.jpg)
1. Select the food bowl image in the center-left area
2. Right-click → Export
3. Choose format: JPG or PNG
4. Quality: 2x for retina displays
5. Save as `food-bowl.jpg`
6. Place in `/public/images/` folder

#### Image 2: Grocery Bag (grocery-bag.jpg)
1. Select the white paper bag with vegetables
2. Right-click → Export
3. Choose format: JPG or PNG
4. Quality: 2x
5. Save as `grocery-bag.jpg`
6. Place in `/public/images/` folder

#### Image 3: Green Shopping Bag (green-bag.jpg)
1. Select the green reusable shopping bag with veggies
2. Right-click → Export
3. Choose format: JPG or PNG
4. Quality: 2x
5. Save as `green-bag.jpg`
6. Place in `/public/images/` folder

#### Image 4: Garden Plants (garden-plants.jpg)
1. Select the person with garden plants/herbs image
2. Right-click → Export
3. Choose format: JPG or PNG
4. Quality: 2x
5. Save as `garden-plants.jpg`
6. Place in `/public/images/` folder

### 3. Update File Extensions
After downloading the images, update the file extensions in the code:

In `app/page.tsx` and `app/components/StatCard.tsx`, change:
- `.svg` → `.jpg` (or `.png` depending on what you exported)

### 4. Optimize Images (Optional but Recommended)
Before placing in the project, consider:
- Compress images using tools like TinyPNG or ImageOptim
- Target file size: Under 200KB per image
- Maintain aspect ratios

### 5. Alternative: Use Figma Export Panel
1. Select the frame/image
2. Look for "Export" in the right sidebar
3. Click the "+" button to add export settings
4. Choose format and size
5. Click "Export [name]"

## Quick Export Settings Recommendations

| Image | Format | Size | Estimated Dimensions |
|-------|--------|------|---------------------|
| Food Bowl | JPG | 2x | 400x300px |
| Grocery Bag | PNG | 2x | 300x300px |
| Green Bag | PNG | 2x | 300x300px |
| Garden Plants | JPG | 2x | 400x400px |

## After Export
1. Delete the placeholder SVG files
2. Place your exported images in `/public/images/`
3. Update the file extensions in the code
4. Run `npm run dev` to see the real images

## Need Help?
If you have issues exporting from Figma:
1. Make sure you have view access to the file
2. Try using the keyboard shortcut: Select image + CMD+SHIFT+E (Mac) or CTRL+SHIFT+E (Windows)
3. Check Figma's export documentation: https://help.figma.com/hc/en-us/articles/360040028114-Export-frames-and-objects



