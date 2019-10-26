import axios from 'axios';

/**
 * WeatherService
 */
export default class WeatherService  {
    async getWeatherData(location) {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: location,
                appId: '921a36bea3fdd2b7978f6543d614d074',
                units: 'metric',
            },
        });

        if (response.status !== 200) {
            throw response;
        }

        return {
            status: response.status,
            message: response.statusText,
            data: {
                location: `${response.data.name}, ${response.data.sys.country}`,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                temp: response.data.main.temp,
                tempMax: response.data.main.temp_max,
                tempMin: response.data.main.temp_min,
            }
        };
    }
}
