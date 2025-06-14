// src/api/omdb.js
import axios from "axios";

const API_KEY = "fe59de73";  // ✅ Your working OMDb key
const BASE_URL = "https://www.omdbapi.com/";

export const fetchEvents = async () => {
  try {
    const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=concert&type=movie`);
    return res.data.Search || [];
  } catch (err) {
    console.error("Error fetching events:", err);
    return [];
  }
};

export const fetchEventDetails = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
    return res.data;
  } catch (err) {
    console.error("Error fetching event details:", err);
    return null;
  }
};
