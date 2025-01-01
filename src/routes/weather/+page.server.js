import db from "$lib/db.js";
import axios from "axios";
import { API_KEY } from "$env/static/private";



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