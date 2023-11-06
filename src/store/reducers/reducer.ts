import { PayloadAction } from '@reduxjs/toolkit';
import { FETCH_CHARACTERS_FAILURE, FETCH_CHARACTERS_REQUEST, FETCH_CHARACTERS_SUCCESS } from '../actions/actions';
import { Character } from '../../components/Characters';

interface CharactersState {
  loading: boolean;
  data: Character | null;
  error: any | null;
}

const initialCharactersState: CharactersState = {
  loading: false,
  data: null,
  error: null,
};



const charactersReducer = (state = initialCharactersState, action: PayloadAction<any>) => {
  switch (action.type) {
  case FETCH_CHARACTERS_REQUEST:
    return { ...state, loading: true};
  case FETCH_CHARACTERS_SUCCESS:
    return { ...state, data: action.payload, loading: false};
   case FETCH_CHARACTERS_FAILURE:
    return { ...state, error: action.payload , loading: false};

  default:
    return state;
  }
};

export default charactersReducer;





