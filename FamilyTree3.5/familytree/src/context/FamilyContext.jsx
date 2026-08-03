import { createContext, useContext, useState } from "react";

const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([
    {
      id: 1,
      name: "Root Ancestor",
      gender: "male",
      dates: "",
      occupation: "",
      photo: "",
      parentId: null,
      spouseId: null,
      children: [],
      fillColor: "#ffffff",
      borderColor: "#4f46e5",
      textColor: "#000000",
      shape: "rounded",
      photoShape: "circle",
    },
  ]);

  const [selectedPerson, setSelectedPerson] = useState(null);

  // Add Member
  const addMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now(),
    };

    setFamilyMembers((prev) => [...prev, newMember]);
  };

  // Update Member
  const updateMember = (updatedMember) => {
    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );

    if (selectedPerson?.id === updatedMember.id) {
      setSelectedPerson(updatedMember);
    }
  };

  // Delete Member
  const deleteMember = (id) => {
    setFamilyMembers((prev) =>
      prev.filter((member) => member.id !== id)
    );

    if (selectedPerson?.id === id) {
      setSelectedPerson(null);
    }
  };

  // Get Member By Id
  const getMember = (id) => {
    return familyMembers.find((member) => member.id === id);
  };

  // Add Child
  const addChild = (parentId, child) => {
    const childId = Date.now();

    const newChild = {
      ...child,
      id: childId,
      parentId,
    };

    setFamilyMembers((prev) => [...prev, newChild]);
  };

  // Add Spouse
  const addSpouse = (personId, spouse) => {
    const spouseId = Date.now();

    const newSpouse = {
      ...spouse,
      id: spouseId,
      spouseId: personId,
    };

    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === personId
          ? { ...member, spouseId }
          : member
      ).concat(newSpouse)
    );
  };

  const value = {
    familyMembers,
    selectedPerson,
    setSelectedPerson,

    addMember,
    updateMember,
    deleteMember,

    addChild,
    addSpouse,

    getMember,

    setFamilyMembers,
  };

  return (
    <FamilyContext.Provider value={value}>
      {children}
    </FamilyContext.Provider>
  );
};

export const useFamily = () => {
  return useContext(FamilyContext);
};