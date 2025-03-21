import React from "react";
import { Card } from "react-bootstrap";

const CurrentWeather = ({ weather }) => {
    if (!weather) return null;

    return (
        <Card className="text-center shadow-lg">
            <Card.Body>
                <Card.Title>{weather.name}, {weather.sys.country}</Card.Title>
                <Card.Text className="h3">{weather.main.temp}°C</Card.Text>
                <Card.Text>{weather.weather[0].description}</Card.Text>
                <Card.Text>Humidity: {weather.main.humidity}%</Card.Text>
                <Card.Text>Wind: {weather.wind.speed} m/s</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CurrentWeather;
