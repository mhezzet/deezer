import axios from "axios";

export const deezerApi = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.deezer.com/",
});
