import api from './api.js'

const KEY = import.meta.env.VITE_WEATHER_API;

export const getCurrentWeather = async ({q}) => api.get(`current.json?key=${KEY}&q=${q}&lang=ru`);

export const getForecastWeather = async ({q, days}) => api.get(`forecast.json?key=${KEY}&q=${q}&days=${days}&lang=ru`);

export const getAutomationCity = async ({q}) => api.get(`search.json?key=${KEY}&q=${q}&lang=ru`);
