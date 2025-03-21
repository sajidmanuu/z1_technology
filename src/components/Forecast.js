import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Forecast = ({ forecast }) => {
    if (!forecast) return null;

    return (
        <div className="mt-4">
            <h4 className="text-center">5-Day Forecast</h4>
            <Row className="justify-content-center">
                {forecast.list.filter((_, index) => index % 8 === 0).map((item, index) => (
                    <Col key={index} xs={6} md={4} lg={2} className="mb-3">
                        <Card className="text-center shadow-sm">
                            <Card.Body>
                                <Card.Text>{new Date(item.dt_txt).toLocaleDateString()}</Card.Text>
                                <Card.Text className="h4">{item.main.temp}°C</Card.Text>
                                <Card.Text>{item.weather[0].description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Forecast;
