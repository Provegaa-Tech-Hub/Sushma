# Testing Guide - Heart Shape & Spouse Editing

## ✅ What's Been Updated

### 1. Heart Shape for Photos (NEW!)
- Added heart shape option for photo containers
- Available in both sidebar and properties panel
- 4 photo shapes total: Circle, Square, Rounded, Heart

### 2. Spouse Editing (ENHANCED)
- Added debug logging to identify issues
- Enhanced data-id detection for spouse cards
- Multiple fallback methods for finding spouse elements

---

## 🧪 Testing Instructions

### Test 1: Heart Shape for Photos

#### Step 1: Upload a Photo
1. Open the family tree
2. Click **"Assets"** tab in left sidebar
3. Click upload area and select a photo
4. Photo appears in Recent Uploads

#### Step 2: Add Photo to Person
1. Click on any person card
2. Properties panel opens on right
3. Click **"Upload Photo"** button
4. Select photo

#### Step 3: Change to Heart Shape
1. Photo appears in the card
2. In Properties panel, scroll to **"PHOTO SHAPE"** section
3. You should see **4 shape buttons**:
   - Circle
   - Square
   - Rounded
   - **Heart** (NEW - pink heart icon)
4. Click the **Heart** button
5. Photo should transform into a heart shape

#### Expected Result:
- ✅ Photo container becomes heart-shaped
- ✅ Heart has proper proportions
- ✅ Photo is centered inside heart
- ✅ Heart has smooth curves

---

### Test 2: Spouse Editing

#### Step 1: Add a Spouse
1. Open browser console (F12 or Right-click → Inspect → Console)
2. Click the **⋮** menu on any person card
3. Click **"Add Spouse"**
4. Fill in spouse details:
   - Name: "Jane Doe"
   - Gender: Female
   - Dates: "1980-Present"
5. Click "Add Spouse"

#### Step 2: Try to Edit Spouse
1. **Click directly on the spouse card** (the one you just added)
2. **Watch the browser console** for debug messages
3. You should see a log like:
   ```
   Clicked person card: {
     hasLi: false,
     liId: undefined,
     divId: "15" (or some number),
     finalId: "15",
     isSpouse: true
   }
   ```

#### Step 3: Verify Properties Panel Opens
1. After clicking spouse, Properties panel should open on right
2. Panel should show:
   - ✅ PHOTO section
   - ✅ CONTENT section (Name, Dates, Gender)
   - ✅ SHAPE section
   - ✅ COLORS section
   - ✅ LINK section

#### Step 4: Edit Spouse Properties
1. Change name to "Jane Smith"
2. Change dates to "1985-Present"
3. Upload a photo
4. Change photo to heart shape
5. Change card shape to Circle
6. Change background color

#### Expected Results:
- ✅ All changes apply immediately
- ✅ No errors in console
- ✅ Spouse card updates in real-time

---

## 🐛 If Spouse Editing Doesn't Work

### Check Console Logs
1. Open browser console (F12)
2. Click on spouse card
3. Look for these messages:

**Good Output:**
```
Clicked person card: {
  hasLi: false,
  divId: "15",
  finalId: "15",
  isSpouse: true
}
```

**Bad Output:**
```
No person ID found for clicked card
```

**Or:**
```
Person not found: undefined
```

### If You See "No person ID found":

**The spouse card is missing data-id attribute. Let me know and I'll fix it.**

Steps to temporarily fix:
1. Right-click on spouse card
2. Inspect element
3. Find the `<div class="person spouse-person">`
4. Check if it has `data-id="some-number"`
5. If missing, that's the issue

---

## 📸 Visual Tests

### Heart Shape Should Look Like:
```
    ❤️
  /    \
 |      |
  \    /
   \  /
    \/
```
- Two rounded bumps at top
- Point at bottom
- Smooth curves
- Photo fills the shape

### Spouse Card Should:
- Be inside a pink "Family Box"
- Have heart emoji (💕) between couple
- Have same structure as regular cards
- Have ⋮ menu button in top-right

---

## 🔍 What to Look For

### Heart Shape:
- ✅ Appears in sidebar (4th shape option)
- ✅ Pink/red color in preview
- ✅ Appears in Properties panel
- ✅ Clicking it applies heart shape to photo
- ✅ Photo container transforms smoothly
- ✅ Photo stays centered

### Spouse Editing:
- ✅ Click spouse card → Properties panel opens
- ✅ Can edit name, dates, gender
- ✅ Can upload/change photo
- ✅ Can change photo shape (including heart!)
- ✅ Can change card shape
- ✅ Can change colors
- ✅ Can add links
- ✅ Console shows correct person ID

---

## 📝 Report Template

If something doesn't work, please provide:

### For Heart Shape Issue:
- [ ] Heart shape appears in sidebar? (Yes/No)
- [ ] Heart shape appears in Properties panel? (Yes/No)
- [ ] Clicking heart shape does anything? (Yes/No)
- [ ] What happens when you click heart?
- [ ] Any console errors?
- [ ] Screenshot of the result

### For Spouse Editing Issue:
- [ ] Can you click on spouse card? (Yes/No)
- [ ] Does Properties panel open? (Yes/No)
- [ ] What appears in console when you click?
- [ ] Copy-paste the console log
- [ ] Does the spouse card have a ⋮ menu? (Yes/No)
- [ ] Screenshot of the spouse card
- [ ] Screenshot of browser console

---

## 🎯 Expected Behavior Summary

### Heart Shape:
1. Upload photo → Works
2. Add photo to person → Works
3. See 4 shape options (Circle, Square, Rounded, Heart) → Works
4. Click Heart → Photo becomes heart-shaped → **SHOULD WORK**

### Spouse Editing:
1. Add spouse → Works
2. Click spouse card → **SHOULD WORK**
3. Properties panel opens → **SHOULD WORK**
4. Edit all properties → **SHOULD WORK**
5. Changes apply → **SHOULD WORK**

---

## 💡 Known Issues & Workarounds

### If Spouse Click Doesn't Work:
**Workaround:** Use the ⋮ menu on spouse card
- This should still work
- Menu has all actions
- Can indirectly edit via menu options

### If Heart Shape Looks Wrong:
- Try refreshing the page
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser

### If Console Shows Errors:
- Take screenshot of errors
- Share the exact error message
- This helps identify the root cause

---

## 🚀 Quick Test Checklist

### 5-Minute Test:
- [ ] Open family tree
- [ ] Add a spouse to any person
- [ ] Click the spouse card
- [ ] Properties panel opens (YES/NO)
- [ ] Upload a photo for spouse
- [ ] Click Heart shape button
- [ ] Photo becomes heart-shaped (YES/NO)
- [ ] Take screenshot
- [ ] Check browser console
- [ ] Report results

---

## 📞 Need Help?

If tests fail, provide:
1. Which browser you're using
2. Console logs (copy all text)
3. Screenshots of the issue
4. Steps you took before the issue

I'll investigate and fix any issues immediately!
