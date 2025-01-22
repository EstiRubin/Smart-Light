import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ApiComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_URL = 'http://localhost:3001/api/project';

    // GET request to fetch data
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleCardClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <div>
            {data.map((project) => (
                <div key={project._id}>
                    <Card
                        style={{ width: '18rem', cursor: 'pointer' }}
                        onClick={() => handleCardClick(project._id)}
                    >
                        <Card.Img variant="top" src={`${project.images[1]}`} />
                        <Card.Body>
                            <Card.Title>{project.nameOfProject}, {project.projectCreationDate},{project.id}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ApiComponent;
