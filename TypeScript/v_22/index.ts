//interface is same as type 
// the difefrcne is of is equal tosign 
// allows to define how object shouldloke like
//type andproperties
//type checkimg during developem


  // Define the expected props for the PhoneticsAudio component
  type PhoneticsAudioProps = {
    item: {
      phonetics?: {
        text: string; // Text representation of the phonetics
    audio: string;
      }[]; // Optional array of Phonetic objects
    };
  };

