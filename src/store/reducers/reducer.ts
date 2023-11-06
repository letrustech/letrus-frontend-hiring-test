import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharactersState {
  loading: boolean;
  data: any | null;
  error: any | null;
}

const initialCharactersState: CharactersState = {
  loading: false,
  data: null,
  error: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharactersState,
  reducers: {
    fetchCharactersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchCharactersFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchCharactersRequest, fetchCharactersSuccess, fetchCharactersFailure } = charactersSlice.actions;

export default charactersSlice.reducer;


