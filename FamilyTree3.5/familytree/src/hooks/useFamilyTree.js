import { useFamily } from "../context/FamilyContext";

export default function useFamilyTree() {
  const {
    familyMembers,
    setFamilyMembers,
    selectedPerson,
    setSelectedPerson,
  } = useFamily();

  // Add Member
  const addMember = (member) => {
    const newMember = {
      ...member,
      id: Date.now(),
      parentId: member.parentId || null,
      spouseId: null,
      children: [],
    };

    setFamilyMembers((prev) => [...prev, newMember]);

    return newMember;
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

  // Find Member
  const findMember = (id) => {
    return familyMembers.find((member) => member.id === id);
  };

  // Get Children
  const getChildren = (parentId) => {
    return familyMembers.filter(
      (member) => member.parentId === parentId
    );
  };

  // Get Spouse
  const getSpouse = (personId) => {
    return familyMembers.find(
      (member) => member.spouseId === personId
    );
  };

  // Add Child
  const addChild = (parentId, child) => {
    return addMember({
      ...child,
      parentId,
    });
  };

  // Add Spouse
  const addSpouse = (personId, spouse) => {
    const spouseId = Date.now();

    const newSpouse = {
      ...spouse,
      id: spouseId,
      spouseId: personId,
      parentId: null,
      children: [],
    };

    setFamilyMembers((prev) =>
      prev.map((member) =>
        member.id === personId
          ? { ...member, spouseId }
          : member
      )
    );

    setFamilyMembers((prev) => [...prev, newSpouse]);

    return newSpouse;
  };

  // Select Member
  const selectMember = (member) => {
    setSelectedPerson(member);
  };

  // Clear Selection
  const clearSelection = () => {
    setSelectedPerson(null);
  };

  return {
    familyMembers,
    selectedPerson,

    addMember,
    updateMember,
    deleteMember,

    addChild,
    addSpouse,

    getChildren,
    getSpouse,
    findMember,

    selectMember,
    clearSelection,
  };
}