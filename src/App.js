import React, { useState } from "react";
import { fetchCurrentWeather, fetchForecast } from "./services/weatherService";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { Container, Form, Button, Spinner, Alert } from "react-bootstrap";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!city) return;
        setLoading(true);
        setError(null);

        const weatherData = await fetchCurrentWeather(city);
        const forecastData = await fetchForecast(city);

        if (!weatherData) {
            setError("City not found!");
        } else {
            setWeather(weatherData);
            setForecast(forecastData);
        }

        setLoading(false);
    };

    return (
        <Container className="mt-5">
           <h2 className="text-center mb-4">🌤️ Weather Dashboard</h2>
<p className="text-center text-muted">Created by <strong>Sajid Khan</strong></p>
            
            <Form className="d-flex justify-content-center mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-50 me-2"
                />
                <Button onClick={handleSearch} disabled={loading} variant="primary">
                    {loading ? <Spinner animation="border" size="sm" /> : "Search"}
                </Button>
            </Form>

            {error && <Alert variant="danger" className="text-center">{error}</Alert>}

            {weather && <CurrentWeather weather={weather} />}
            {forecast && <Forecast forecast={forecast} />}
        </Container>
    );
}

export default App;
