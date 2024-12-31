import db from "$lib/db.js";
import axios from "axios";

const API_KEY = "e123d594343c7defedeadaf865ca98af"; 

export async function load() {
    const destinations = await db.getDestinations();
    const weatherData = await Promise.all(
        destinations.map(async (destination) => {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${destination.name}&appid=${API_KEY}&units=metric`
            );
            return {
                ...destination,
                weather: response.data
            };
        })
    );
    return {
        destinations: weatherData
    };
}