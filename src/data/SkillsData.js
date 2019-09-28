const skills = {
    Paladin: ["Dagger", "Shield", "Perception", "Spear", "Leather", "Diplomacy", "Mace", "Chain", "Disarm"],
    Knight: ["Dagger", "Bow", "Athletics", "Spear", "Axe", "Shield", "Perception", "Chain", "Disarm"],
    Cleric: ["Staff", "Spirit", "Repair", "Shield", "Mind", "Meditation", "Leather", "Identity", "Disarm"],
    Archer: ["Sword", "Leather", "Perception", "Dagger", "Fire", "Diplomacy", "Axe", "Identity", "Disarm"],
    Sorcerer: ["Staff", "Water", "Repair", "Leather", "Earth", "Meditation", "Air", "Identity", "Diplomacy"],
    Druid: ["Mace", "Spirit", "Repair", "Leather", "Body", "Meditation", "Water", "Identity", "Learning"]
};

const baseSkills = {
    Paladin: ["Sword", "Spirit"],
    Knight: ["Sword", "Leather"],
    Cleric: ["Mace", "Body"],
    Archer: ["Bow", "Air"],
    Sorcerer: ["Dagger", "Fire"],
    Druid: ["Staff", "Earth"]
};

export { skills, baseSkills }