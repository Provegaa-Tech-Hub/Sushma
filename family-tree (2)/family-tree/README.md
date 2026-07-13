# Interactive Family Tree

A fully interactive, unlimited-level family tree application with photo upload, gender tracking, spouse relationships, and multiple export options.

## Features

### 🌳 Core Functionality
- **Unlimited Levels**: Add as many generations as needed (no restrictions)
- **Add/Edit/Remove**: Full CRUD operations on family members
- **Photo Upload**: Attach photos to each person (stored as base64)
- **Gender Tracking**: Male (♂), Female (♀), Other (⚥) with color-coded badges
- **Spouse Support**: Add spouses at any level (displayed side-by-side)

### 📊 Export Options
- **📷 Export as Image (PNG)**: High-quality screenshot of the entire tree
- **📄 Export as PDF**: Print-ready PDF document

### 🎨 User Experience & Customization
- **Interactive UI**: Hover to reveal action buttons
- **Color-Coded Levels**: 6 distinct gradient colors that cycle for deeper levels
- **Animations**: Smooth transitions when adding/removing members
- **Responsive Design**: Works on desktop and mobile devices
- **Photo Placeholders**: Default avatar icon when no photo is uploaded
- **🎨 NEW: Shape Options**: 4 different card shapes (Rectangle, Rounded, Circle, Hexagon)
- **🎨 NEW: Color Customization**: Custom background, border, and text colors per person
- **🎨 NEW: Link Attachment**: Add external URLs to person cards with visual indicators
- **🎨 NEW: Style Reset**: One-click return to default styling

## How to Use

### Opening the Application
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Adding Family Members

#### Add a Child
1. Hover over any person card
2. Click the **"+ Child"** button
3. Fill in required fields:
   - **Name** (required)
   - **Gender** (required)
   - **Dates** (optional - e.g., 1990-Present)
   - **Photo** (optional)
4. Click **"Add Child"**

#### Add a Spouse
1. Hover over any person card
2. Click the **"+ Spouse"** button
3. Fill in spouse details
4. Click **"Add Spouse"**
5. **Family Box Created**: Both people are automatically placed in a family box
   - Pink bordered box with gradient background
   - "Family Unit" label appears on top
   - Heart (💕) appears between the couple
6. **Important**: Each person can have only ONE spouse
7. Once a spouse is added, the "+ Spouse" button is hidden
8. To remove spouse, click "Remove" on the spouse card
9. **Shared Children**: Add children to either parent - they appear below the family box

### Editing Family Members
1. Hover over any person card
2. Click the **"Edit"** button
3. Modify name, gender, dates, or photo
4. Click **"Update Person"**

### 🎨 Customizing Person Cards (NEW!)
1. Hover over any person card
2. Click the **"🎨 Style"** button to open the customization menu
3. **Choose a Shape**:
   - Rectangle: Sharp, formal appearance
   - Rounded: Soft, default style (recommended)
   - Circle: Perfect for portrait photos
   - Hexagon: Unique, modern look
4. **Customize Colors**:
   - Background Color: Pick any color and click "Apply"
   - Border Color: Pick any color and click "Apply"
   - Text Color: Pick any color and click "Apply"
5. **Add Links**:
   - Enter a full URL (e.g., https://example.com)
   - Click "Add Link"
   - A 🔗 indicator appears on the card
   - Click the card to open the link in a new tab
6. **Reset Styling**:
   - Click "Reset to Default" to remove all customizations

**See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for detailed instructions and tips.**

### Removing Family Members
1. Hover over any person card
2. Click the **"Remove"** button
3. Confirm deletion (will also remove all descendants)

### Exporting

#### As Image
- Click **"📷 Export as Image"** button at the top
- Downloads a PNG file of the entire family tree
- Action buttons are hidden during export for clean output

#### As PDF
- Click **"📄 Export as PDF"** button
- Downloads a PDF document
- Automatically adjusts orientation based on tree dimensions


## File Structure

```
family-tree/
├── index.html                  # Main HTML structure
├── styles.css                  # All styling and animations
├── script.js                   # Interactive functionality and export logic
├── README.md                   # This file
├── CUSTOMIZATION_GUIDE.md      # Detailed customization instructions
└── test-customization.html     # Feature demonstration page
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Gradients, animations, flexbox, responsive design
- **JavaScript (ES6+)**: DOM manipulation, file handling
- **html2canvas**: Converts DOM to canvas for image/PDF export
- **jsPDF**: PDF generation library

### Data Storage
- All data is stored in the DOM (data attributes)
- Photos stored as base64 data URLs
- No backend or database required
- Data persists only during the session (refresh resets to initial state)

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Touch-friendly

## Customization

### Changing Colors
Edit `styles.css` and modify the `.level-X` gradient backgrounds:
```css
.level-1 {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Modifying Tree Layout
Adjust spacing in `.tree li` padding and `ul` positioning in `styles.css`.

### Adding More Fields
1. Add input field to the form in `index.html`
2. Update `submitNewPerson()` and `submitEditPerson()` in `script.js`
3. Add display element to person card structure

## Console Functions

Open browser console and use these helper functions:
- `exportTreeData()` - Export tree as JSON object
- `countFamilyMembers()` - Get total member count
- `getFamilyMember(id)` - Get person details by ID
- `searchFamily("term")` - Highlight matching members

## Recently Added Features ✨

- ✅ Shape customization (4 options: Rectangle, Rounded, Circle, Hexagon)
- ✅ Color customization (Background, Border, Text colors)
- ✅ Link attachment to person cards
- ✅ Visual link indicators (🔗)
- ✅ Style reset functionality
- ✅ Real-time preview of changes
- ✅ Animated style transitions

## Future Enhancements

Potential features to add:
- [ ] Save/Load tree from JSON file
- [ ] Persist customizations in localStorage
- [ ] Import from GEDCOM format
- [ ] Printable family book format
- [ ] Family statistics dashboard
- [ ] Search and filter functionality
- [ ] Relationship calculator
- [ ] Timeline view
- [ ] Dark mode
- [ ] Font customization
- [ ] Background patterns
- [ ] Custom icons and emoji additions

## Credits

Created as a fully interactive family tree solution with modern web technologies.

## License

Free to use and modify for personal or commercial projects.
