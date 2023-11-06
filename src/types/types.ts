

export interface CharactersState {
    loading: boolean;
    data: CharacterData | null;
    error: string | null;
  }
  
  export interface Character {
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    episode: string[];
  }
  
  export interface CharacterData {
    loading: boolean;
    data: Character | null;
    error: string | null;
  }
  
  