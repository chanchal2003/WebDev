//

//on the basis of input
//number is put -? double it
//string is input -> uppercse

type Pet = {
    name: string;
  };
  
  type PetOwner = {
    name: string;
    pet: Pet;
  };
  
  function getPetName(petOrOwner: Pet | PetOwner) {
    if ("pet" in petOrOwner) {
      // The type of petOrOwner is narrowed to PetOwner within this block
      return petOrOwner.pet.name; // Accessing the name property of the pet
    }
  
    // If "pet" is not present, treat petOrOwner as a Pet
    return petOrOwner.name; // Accessing the name property of the pet
  }

  