
import '../css/ProjectDetails.css';



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const API_URL = `http://localhost:3000/api/project/${id}`;

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setProject(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleNextImage = () => {
        if (project && project.images) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
        }
    };

    const handlePrevImage = () => {
        if (project && project.images) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex - 1 + project.images.length) % project.images.length
            );
        }
    };

    const handleImageSelect = (index) => {
        setCurrentImageIndex(index);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="project-details-container">
            {project && project.images && (
                <>
                    {/* Left Side - Main Image */}
                    <div className="carousel-container">
                        <div className="main-image-container">
                            <button className="arrow left-arrow" onClick={handlePrevImage}>
                                &#10094;
                            </button>
                            <img
                                src={project.images[currentImageIndex]}
                                alt={`Image ${currentImageIndex + 1}`}
                                className="main-image"
                            />
                            <button className="arrow right-arrow" onClick={handleNextImage}>
                                &#10095;
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Project Details */}
                    <div className="project-info">
                        <h1 className="project-title">{project.nameOfProject}</h1>
                        <p className="project-date-location">
                            <strong>Date:</strong> {project.projectCreationDate}<br />
                            <strong>Location:</strong> {project.location}
                        </p>
                        <p className="project-architect">
                            <strong>Architect:</strong> {project.architect}
                        </p>
                        <p className="project-description">{project.description}</p>

                        {/* Thumbnail Gallery */}
                        <div className="thumbnail-gallery">
                            <h2>Gallery</h2>
                            <div className="thumbnail-container">
                                {project.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="thumbnail"
                                        onClick={() => handleImageSelect(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Cards */}
                        <div className="product-cards">
                            <h2>Integrated Products</h2>
                            <div className="product-card-container">
                                {project.combinedProducts && project.combinedProducts.map((product, index) => (
                                    <Card key={product._id} className="product-card">
                                        <Card.Body>
                                            <Card.Title>{product.nameOfProduct}</Card.Title>
                                            <Card.Text>
                                                <strong>Price:</strong> {product.price}<br />
                                                <strong>Watt:</strong> {product.watt}<br />
                                                <strong>Colors:</strong> {product.colors}<br />
                                                <strong>Light Colors:</strong> {product.lightColors}<br />
                                                <strong>Beam Angle:</strong> {product.beamAngle}<br />
                                                <strong>IP Rating:</strong> {product.IP}<br />
                                                <strong>Dimmable:</strong> {product.DIM}<br />
                                            </Card.Text>
                                            {product.imags && product.imags.length > 0 && (
                                                <div className="product-images">
                                                    {product.imags.map((img, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={img}
                                                            alt={`Product Image ${idx + 1}`}
                                                            className="product-thumbnail"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectDetails;
