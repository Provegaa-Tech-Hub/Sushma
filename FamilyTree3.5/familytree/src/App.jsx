// src/App.jsx

import { useState } from "react";
import './index.css'

import Toolbar from "./components/Toolbar";
import sidemenu from "./components/Sidemenu";
import FamilyTree from "./components/FamilyTree";
import AddPersonModal from "./components/AddPersonModal";
import PropertiesPanel from "./components/PropertiesPanel";
import useFamilyTree from "./hooks/useFamilyTree";
import usePhotoUpload from "./hooks/usePhotoUpload";

function App() {
  // Application State
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: "Root Ancestor",
      gender: "male",
      dates: "",
      occupation: "",
      photo: null,
      parentId: null,
      spouseId: null,
      children: [],
      shape: "apple",
      fillColor: "#ffffff",
      borderColor: "#667eea",
      textColor: "#000000",
      photoShape: "circle",
      level: 1,
    },
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [editMode, setEditMode] = useState(false);

  const [sidebarHidden, setSidebarHidden] = useState(false);

  const [language, setLanguage] = useState("en");

  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  // -----------------------
  // Open Add Person
  // -----------------------
  const handleAddPerson = () => {
    setEditMode(false);
    setShowModal(true);
  };

  // -----------------------
  // Edit Person
  // -----------------------
  const handleEditPerson = (person) => {
    setSelectedPerson(person);
    setEditMode(true);
    setShowModal(true);
  };

  // -----------------------
  // Delete Person
  // -----------------------
  const handleDeletePerson = (id) => {
    setFamilyMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );

    if (selectedPerson?.id === id) {
      setSelectedPerson(null);
    }
  };

  // -----------------------
  // Save Person
  // -----------------------
  const handleSavePerson = (personData) => {
    if (editMode) {
      setFamilyMembers((prev) =>
        prev.map((member) =>
          member.id === personData.id ? personData : member
        )
      );
    } else {
      setFamilyMembers((prev) => [
        ...prev,
        {
          ...personData,
          id: Date.now(),
        },
      ]);
    }

    setShowModal(false);
  };

  return (
    <div className="app">

      {/* Toolbar */}
      <Toolbar
        language={language}
        setLanguage={setLanguage}
      />

      {/* Sidebar */}
      <Sidebar
        hidden={sidebarHidden}
        setHidden={setSidebarHidden}
        uploadedPhotos={uploadedPhotos}
        setUploadedPhotos={setUploadedPhotos}
      />

      {/* Family Tree */}
      <FamilyTree
        members={familyMembers}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        onAddPerson={handleAddPerson}
        onEditPerson={handleEditPerson}
        onDeletePerson={handleDeletePerson}
      />

      {/* Properties */}
      <PropertiesPanel
        selectedPerson={selectedPerson}
        familyMembers={familyMembers}
        setFamilyMembers={setFamilyMembers}
      />

      {/* Modal */}
      {showModal && (
        <AddPersonModal
          editMode={editMode}
          person={selectedPerson}
          onClose={() => setShowModal(false)}
          onSave={handleSavePerson}
        />
      )}
    </div>
  );
}

export default App;