//
function getPetName(petOrOwner) {
    if ("pet" in petOrOwner) {
        // The type of petOrOwner is narrowed to PetOwner within this block
        return petOrOwner.pet.name; // Accessing the name property of the pet
    }
    // If "pet" is not present, treat petOrOwner as a Pet
    return petOrOwner.name; // Accessing the name property of the pet
}
