# Family Box Implementation

## Overview
Couples are now displayed in a **Family Box** format - a visually distinct container that groups married partners together with their shared children.

## Visual Design

### Family Box Features
1. **Border**: 4px pink border (`rgba(250, 112, 154, 0.4)`)
2. **Background**: Gradient from pink to yellow with transparency
3. **Label**: "Family Unit" badge at the top center
4. **Shadow**: Soft shadow for depth
5. **Heart Symbol**: 💕 Large heart between the couple
6. **Rounded Corners**: 20px border-radius for modern look

### Layout Structure
```
<li data-id="1" data-spouse-id="2">
  <div class="family-box">
    <div class="couple-container">
      <div class="person">Person 1</div>
      <div class="person spouse-person" data-id="2">Spouse</div>
    </div>
  </div>
  <ul>
    <li>Child 1</li>
    <li>Child 2</li>
  </ul>
</li>
```

## How It Works

### Adding a Spouse
1. User clicks "+ Spouse" on any person
2. System creates `.family-box` wrapper if it doesn't exist
3. Moves existing person card into `.couple-container`
4. Adds spouse card next to them
5. Hides spouse button for both people
6. Sets `data-spouse-id` on parent `<li>`

### Adding Children
- Children are added to the parent `<li>` (outside family box)
- Tree connections automatically adjust
- Both parents can add children (they share the same list)

### Removing a Spouse
- Click "Remove" on spouse card
- Spouse card is removed from family box
- If only one person remains, family box is unwrapped
- Spouse button becomes visible again

## CSS Classes

### Key Classes
- `.family-box` - Main container for couple
- `.couple-container` - Flexbox holding both people side-by-side
- `.spouse-person` - Applied to the spouse card
- `[data-spouse-id]` - Selector for people with spouses

### Styling Rules
- Flexbox with 30px gap between spouses
- Heart positioned absolutely in center
- Family box is inline-block to work with tree flow
- Hover effects adjusted to prevent overlap

## JavaScript Functions

### Core Functions
- `addSpouseToPerson()` - Creates family box and adds spouse
- `removeSpouse()` - Removes spouse and cleans up family box
- `editPerson()` - Updated to handle both regular and spouse persons
- `submitEditPerson()` - Updated to work with family box structure

### Helper Logic
- Checks for existing family box before creating new one
- Unwraps family box if spouse is removed
- Handles editing of persons in family boxes vs regular persons

## Tree Connections

### Connector Logic
- Children connect from bottom of parent `<li>`
- Family box is positioned inline within the tree
- No special connector rules needed
- Standard tree CSS handles all connections

## Benefits

1. **Visual Clarity**: Couples are clearly grouped together
2. **Proper Hierarchy**: Children connect from the family unit, not individuals
3. **Clean Lines**: No duplicate or confusing connector lines
4. **Intuitive**: Users immediately understand the family structure
5. **Scalable**: Works at any level of the tree

## Testing

Use [test-family-box.html](test-family-box.html) to see:
- Couple in family box
- Heart between them
- Children connected properly
- All styling working correctly

## Files Modified

1. `script.js` - Complete rewrite of spouse logic
2. `styles.css` - New family box styling section
3. `index.html` - Updated instructions
4. `README.md` - Updated documentation

## Known Behavior

- Only ONE spouse per person
- Removing person with spouse removes entire family box
- Children always belong to the parent `<li>`, not the family box
- Both partners can add/edit children
- Spouse button hidden once spouse is added
