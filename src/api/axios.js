import axios from "axios";

const BASE_URL = "https://gifs-api-nodejs.onrender.com";

export default axios.create({
  baseURL: BASE_URL,
});