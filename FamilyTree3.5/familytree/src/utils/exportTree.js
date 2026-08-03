// src/utils/exportTree.js

// Export family tree to JSON
export function exportTree(familyMembers, fileName = "family-tree") {
  try {
    const data = JSON.stringify(familyMembers, null, 2);

    const blob = new Blob([data], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.json`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error("Export failed:", error);
    return false;
  }
}

// Import family tree from JSON
export function importTree(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file selected.");
      return;
    }

    if (file.type !== "application/json") {
      reject("Please select a JSON file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);

        if (!Array.isArray(data)) {
          reject("Invalid family tree file.");
          return;
        }

        resolve(data);
      } catch (err) {
        reject("Invalid JSON file.");
      }
    };

    reader.onerror = () => {
      reject("Unable to read file.");
    };

    reader.readAsText(file);
  });
}

// Save automatically to browser
export function saveToLocalStorage(familyMembers) {
  try {
    localStorage.setItem(
      "familyTree",
      JSON.stringify(familyMembers)
    );
  } catch (error) {
    console.error(error);
  }
}

// Load from browser
export function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem("familyTree");

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Clear saved tree
export function clearLocalStorage() {
  localStorage.removeItem("familyTree");
}