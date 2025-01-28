import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'; // הוספת רכיבי Bootstrap
import "../css/Project.css"
const ApiComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_URL = 'http://localhost:3001/api/project';

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading-message">Loading...</div>;
    if (error) return <div className="error-message">Error: {error.message}</div>;

    const handleCardClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <Container className="mt-5">
            <Row>
                {data.map((project) => (
                    <Col key={project._id} md={4} className="mb-4">
                        <Card
                            className="project-card"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleCardClick(project._id)}
                        >
                            <Card.Img variant="top" src={`${project.images[1]}`} />
                            <Card.Body>
                                <Card.Title className="project-title">{project.nameOfProject}</Card.Title>
                                <Card.Text className="project-details">
                                    <span>תאריך יצירה: {project.projectCreationDate}</span><br />
                                    <span>מזהה פרויקט: {project.id}</span>
                                </Card.Text>
                                <Button variant="primary" className="view-details-btn">הצג פרטים</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ApiComponent;
