import { createSlice } from "@reduxjs/toolkit";
import { deezerApi } from "../../services";
import { message } from "antd";

export const genreSlice = createSlice({
  name: "genre",
  initialState: {
    genres: [],
    isGetGenresLoading: false,
    getGenresError: null,
    selectedGenre: [],
    isGetGenreLoading: false,
    getGenreError: null,
  },
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setIsGetGenresLoading: (state, action) => {
      state.isGetGenresLoading = action.payload;
    },
    setGetGenresError: (state, action) => {
      state.getGenresError = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setIsGetGenreLoading: (state, action) => {
      state.isGetGenreLoading = action.payload;
    },
    setGetGenreError: (state, action) => {
      state.getGenreError = action.payload;
    },
  },
});

export const {
  setGenres,
  setIsGetGenresLoading,
  setGetGenresError,
  setGetGenreError,
  setIsGetGenreLoading,
  setSelectedGenre,
} = genreSlice.actions;

export const getGenres = () => async (dispatch) => {
  try {
    dispatch(setIsGetGenresLoading(true));

    const { data } = await deezerApi.get("genre");

    dispatch(setGenres(data.data));
    dispatch(setIsGetGenresLoading(false));
  } catch (error) {
    dispatch(setIsGetGenresLoading(false));
    dispatch(setGetGenresError(error));
    message.error(error.message);
  }
};

export const getGenre = (id) => async (dispatch) => {
  try {
    dispatch(setIsGetGenreLoading(true));

    const { data } = await deezerApi.get(`genre/${id}/artists`);

    dispatch(setSelectedGenre(data.data));
    dispatch(setIsGetGenreLoading(false));
  } catch (error) {
    dispatch(setIsGetGenreLoading(false));
    dispatch(setGetGenreError(error));
    message.error(error.message);
  }
};

export const getGenreAndGenres = (id) => async (dispatch) => {
  dispatch(setIsGetGenresLoading(true));
  dispatch(setIsGetGenreLoading(true));

  try {
    const { data } = await deezerApi.get(`genre/${id}/artists`);

    dispatch(setSelectedGenre(data.data));
    dispatch(setIsGetGenreLoading(false));
  } catch (error) {
    dispatch(setIsGetGenreLoading(false));
    dispatch(setGetGenreError(error));
    message.error(error.message);
  }

  try {
    const { data } = await deezerApi.get("genre");

    dispatch(setGenres(data.data));
    dispatch(setIsGetGenresLoading(false));
  } catch (error) {
    dispatch(setIsGetGenresLoading(false));
    dispatch(setGetGenresError(error));
    message.error(error.message);
  }
};

export const selectGenres = (state) => state.genre;

export default genreSlice.reducer;
