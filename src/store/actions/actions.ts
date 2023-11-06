import axios from 'axios';

export const FETCH_CHARACTERS_REQUEST = 'FETCH_CHARACTERS_REQUEST';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';
export const FETCH_CHARACTER_REQUEST = 'FETCH_CHARACTER_REQUEST';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const fetchCharactersRequest = () => {
  return {
    type: FETCH_CHARACTERS_REQUEST,
  };
};

export const fetchCharactersSuccess = (characters: any) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersFailure = (error: string) => {
  return {
    type: FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};

export const fetchCharacterById = (characterId: number) => {
  return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    dispatch(fetchCharactersRequest());
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
      dispatch(fetchCharactersSuccess(response.data));
    } catch (error) {
      dispatch(fetchCharactersFailure('Failed to fetch character'));
    }
  };
};




