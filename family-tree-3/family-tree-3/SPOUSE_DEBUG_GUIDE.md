# Spouse Editing Debug Guide

## 🐛 Comprehensive Debugging Added

I've added extensive console logging to identify exactly why spouse editing isn't working.

---

## 🧪 Step-by-Step Testing Instructions

### Step 1: Open Browser Console
1. Open the family tree in browser
2. **Press F12** (or Right-click → Inspect)
3. Click on **Console** tab
4. Keep it open while testing

### Step 2: Check Existing Spouses
Type this in console and press Enter:
```javascript
testSpouseClick()
```

**Expected Output:**
```
=== SPOUSE CLICK TEST ===
Total spouses found: X
Spouse 1: {
  id: "XX",
  gender: "female",
  name: "Jane Doe",
  hasDataId: true,
  classes: "person level-2 gender-female spouse-person"
}
```

**What to Check:**
- ✅ `hasDataId: true` - Spouse has ID
- ✅ `id: "XX"` - ID is a number
- ✅ `name:` - Shows spouse name
- ❌ If `Total spouses found: 0` - No spouses exist yet

---

### Step 3: Add a New Spouse

1. **Click ⋮ menu** on any person card
2. **Click "Add Spouse"**
3. **Fill in details:**
   - Name: Test Spouse
   - Gender: Female
   - Dates: 1980-Present
4. **Click "Add Spouse"**

**Watch Console for:**
```
Found spouse card with ID: 15 Gender: female
```

---

### Step 4: Click the Spouse Card

1. **Click directly on the spouse card** (not the menu button)
2. **Watch console** - Should see:

```
=== PERSON CARD CLICKED ===
Has parent LI: false
LI ID: undefined
DIV ID: "15"
Final ID: "15"
Is spouse: true
Card classes: "person level-2 gender-female spouse-person"
Target element: <div class="name">
========================
Opening properties panel for ID: 15
=== OPENING PROPERTIES PANEL ===
Person ID: 15
Found via LI > .person: false
Found via .person[data-id]: true
✅ Person element found: <div class="person...">
================================
```

---

## 🔍 What Each Log Means

### When You Click Spouse:

#### ✅ GOOD Output:
```
Has parent LI: false          ← Correct, spouse not in LI
DIV ID: "15"                  ← Has ID
Final ID: "15"                ← ID detected
Is spouse: true               ← Identified as spouse
```

#### ❌ BAD Output (Problem):
```
Has parent LI: false
DIV ID: undefined             ← Missing data-id!
Final ID: undefined           ← No ID found
Is spouse: true
```
**→ This means the spouse div doesn't have data-id attribute**

---

### When Opening Properties Panel:

#### ✅ GOOD Output:
```
Found via .person[data-id]: true
✅ Person element found: <div...>
```
**→ Properties panel should open**

#### ❌ BAD Output (Problem):
```
Found via LI > .person: false
Found via .person[data-id]: false
Found via .spouse-person[data-id]: false
❌ Person not found: 15
```
**→ Element exists but can't be found by selectors**

---

## 🎯 Common Issues & Solutions

### Issue 1: DIV ID is undefined

**Problem:** Spouse div doesn't have `data-id` attribute

**Debug:**
1. Right-click on spouse card
2. Click "Inspect"
3. Check the HTML:
```html
<div class="person spouse-person" data-id="15">
                                  ^^^^^^^^^^^^
                                  Should be here!
```

**If missing:**
- This is the bug! The spouse creation code isn't adding data-id
- Send me the console logs

---

### Issue 2: Properties Panel Doesn't Open

**Problem:** Element can't be found even though it has ID

**Debug:**
Type in console:
```javascript
document.querySelector('.spouse-person[data-id="15"]')
```
(Replace "15" with the actual ID from console)

**Expected:**
- Should return the spouse element
- If returns `null`, element isn't in DOM

---

### Issue 3: Click Not Registering

**Problem:** Click event not firing

**Debug:**
1. Click spouse card
2. If you see NO console logs at all
3. The click handler isn't attached

**Check:**
- Are you clicking on the menu button (⋮) by mistake?
- Try clicking on the name or photo area
- Check if an overlay is blocking clicks

---

## 📊 Full Debug Checklist

Run these commands in console:

### 1. Check Total Spouses
```javascript
document.querySelectorAll('.spouse-person').length
```
**Should return:** Number of spouses in tree

### 2. Check Spouse Data-IDs
```javascript
[...document.querySelectorAll('.spouse-person')].map(s => s.dataset.id)
```
**Should return:** Array of IDs like `["15", "16"]`

### 3. Check If Spouse Has Gender
```javascript
[...document.querySelectorAll('.spouse-person')].map(s => ({
  id: s.dataset.id, 
  gender: s.dataset.gender
}))
```
**Should return:** Array like `[{id: "15", gender: "female"}]`

### 4. Test Opening Panel Directly
```javascript
openPropertiesPanel("15")
```
(Replace "15" with actual spouse ID)

**Should:**
- Open properties panel
- Show logs in console
- If error, reveals the exact problem

---

## 🆘 What to Send Me

If spouse editing still doesn't work, copy ALL console output and send:

### Required Info:

1. **Browser & Version:**
   - Example: Chrome 120, Firefox 121, Safari 17

2. **Console Output After Page Load:**
   ```
   [Paste everything from console here]
   ```

3. **Console Output After Running testSpouseClick():**
   ```
   [Paste the output here]
   ```

4. **Console Output After Clicking Spouse:**
   ```
   [Paste ALL logs here - every line]
   ```

5. **Spouse Card HTML:**
   - Right-click spouse
   - Inspect
   - Copy the `<div class="person spouse-person...">` element
   - Paste here:
   ```html
   [Paste HTML here]
   ```

6. **Screenshot:**
   - Show the spouse card
   - Show the console with errors
   - Show browser window

---

## 🔧 Quick Fixes to Try

### Fix 1: Refresh Page
1. Press F5 or Ctrl+R
2. Try clicking spouse again
3. Check console

### Fix 2: Clear Cache
1. Ctrl+Shift+Delete
2. Clear cached files
3. Reload page
4. Try again

### Fix 3: Try Different Browser
1. Open in Chrome
2. Open in Firefox
3. Does it work in either?

### Fix 4: Test with New Spouse
1. Add a brand new spouse
2. Don't use existing spouses
3. Click the newly added one
4. Check console logs

---

## 🎯 Expected Flow (When Working)

```
1. Click spouse card
   ↓
2. Console shows: "=== PERSON CARD CLICKED ==="
   ↓
3. Console shows: "Final ID: 15"
   ↓
4. Console shows: "Opening properties panel for ID: 15"
   ↓
5. Console shows: "✅ Person element found"
   ↓
6. Properties panel opens on right
   ↓
7. Can edit all properties
```

---

## 📞 Next Steps

1. **Follow testing instructions above**
2. **Copy ALL console logs**
3. **Send me:**
   - Console output
   - Browser name
   - Spouse card HTML
   - Screenshot
4. **I'll identify the exact issue** and provide a fix

The comprehensive logging will show exactly where the problem is!

---

## 💡 Temporary Workaround

**While we debug:**

If you need to edit a spouse urgently, you can:
1. Click the person who has the spouse
2. Remove the spouse
3. Add spouse again with correct info
4. This re-creates the spouse card

**This is NOT a solution, just a temporary workaround!**

---

## ✅ Success Indicators

When spouse editing works, you'll see:
- ✅ Click spouse → Properties panel opens
- ✅ Can edit name, dates, gender
- ✅ Can upload photo
- ✅ Can change shapes and colors
- ✅ Console shows "✅ Person element found"
- ✅ No errors in console

Let's get this working! Send me those console logs. 🔍
