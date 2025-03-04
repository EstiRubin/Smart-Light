import "../css/ProjectDetails.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ColorCircle from "./Product/ColorCircle";

const ProjectDetails = () => {
  const { id } = useParams(); // מזהה הפרויקט מהנתיב
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const API_URL = `http://localhost:3001/api/project/${id}`; // כתובת ה-API
  // const API_URL_PRODUCT = `http://localhost:3001/api/product`; // כתובת ה-API
  const [showAll, setShowAll] = useState(false);
  const maxVisible = 5; // Number of images to show initially

  const visibleImages = showAll
    ? project?.images
    : project?.images?.slice(0, maxVisible);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProject(response.data[0]);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleNextImage = () => {
    if (project?.images?.length) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }
  };

  const handlePrevImage = () => {
    if (project?.images?.length) {
      setCurrentImageIndex(
        (prevIndex) =>
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
    <>
      {project && (
        <>
          <h1 className="project-title">{project.nameOfProject}</h1>
          <div className="project-container">
            <div className="gallery-container">
              <div className="images-section">
                <div className="main-image-container">
                  <button
                    className="arrow-left"
                    onClick={handlePrevImage}
                    disabled={!project?.images?.length}
                  >
                    &#10094;
                  </button>

                  {project?.images?.length > 0 ? (
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="main-image"
                    />
                  ) : (
                    <p>אין תמונות זמינות</p>
                  )}

                  <button
                    className="arrow-right"
                    onClick={handleNextImage}
                    disabled={!project?.images?.length}
                  >
                    &#10095;
                  </button>
                </div>

                <div className="thumbnail-gallery">
                  <div className="thumbnail-container">
                    {project?.images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${
                          index === currentImageIndex ? "active" : ""
                        }`}
                        onClick={() => handleImageSelect(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="designer-details">
                <p>
                  <strong>מעצבת:</strong> {project.architect}
                </p>
                <p>
                  <strong>צלמת:</strong> {project.Photographer}
                </p>
                <p>
                  <strong>יעוץ תאורה:</strong> {project.LightingConsultant}
                </p>
              </div>
            </div>
          </div>
          <div className="FewWords">
            <h1>אתגרי הפרוייקט:</h1>
            <h3>אתגרי תאורה ופתרונות יצירתיים בדירה:</h3>
            {project.FewWordsAboutTheProject}
          </div>
          <div className="product-cards">  
            <div className="FewWords">
                                  <h1 > מוצרים משולבים בפרויקט:  </h1>

            </div>

            <div className="product-cards-container1">
              {project?.combinedProducts?.length > 0 ? (
                project.combinedProducts.map((product) =>
                  product ? (
                    // <ProductCard key={product._id} product={product} />
                    <Link
                      key={product._id}
                      to={`/product/${product._id}`}
                      className="product-link"
                    >
                      <div className="product-card1">
                        <img
                          src={product.images[0]}
                          alt={product.nameOfProduct}
                          className="product-image1"
                        />
                        <div className="product-divider"></div>
                        <div className="product-info">
                          <span className="product-name">
                            {product.nameOfProduct}
                          </span>
                          <div className="product-colors">
                            {product.colors.map((color, index) => (
                              <ColorCircle key={index} color={color} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : null
                )
              ) : (
                <p>No products found for this category.</p>
              )}
            </div>

            {/* <div className="product-card-container">
              {project.combinedProducts &&

                project.combinedProducts.map((p, index) => {
                  // <ProductCard></ProductCard>
                  const currentProduct = product && product[index];
                  if (!currentProduct) {
                    return (
                      <Card key={index} className="product-card">
                        <Card.Body>
                          <Card.Title>Unknown Product</Card.Title>
                          <Card.Text>No data available</Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  }
                  return (
                    <Link
                      key={currentProduct._id}
                      to={`/product/${currentProduct._id}`}
                      className="product-card-link"
                    >
                      <Card className="product-card">
                        <Card.Img
                          variant="top"
                          src={
                            currentProduct.images && currentProduct.images[0]
                          }
                          alt={currentProduct.nameOfProduct || "Product Image"}
                          className="product-thumbnail"
                        />
                        <Card.Body>
                          <Card.Title>
                            {currentProduct.nameOfProduct || "Unknown Product"}
                          </Card.Title>
                          <Card.Text>
                            <strong>Price:</strong>{" "}
                            {currentProduct.price || "N/A"} ₪
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  );
                })}
            </div>*/}
          </div>
        </>
      )}
      {/* </div> */}
    </>
  );
};

export default ProjectDetails;
