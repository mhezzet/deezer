import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./app/genres/genreSlice";

export default configureStore({
  reducer: {
    genre: genreSlice,
  },
});
