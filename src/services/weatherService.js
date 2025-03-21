import axios from "axios";

const API_KEY = "e7cfcde96db54636f88762f7b80fe60e";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const fetchCurrentWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}weather`, {
            params: { q: city, appid: API_KEY, units: "metric" },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching current weather:", error);
        return null;
    }
};

export const fetchForecast = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}forecast`, {
            params: { q: city, appid: API_KEY, units: "metric" },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast:", error);
        return null;
    }
};
