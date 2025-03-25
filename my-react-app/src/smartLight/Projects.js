import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Project.css";
import project from "../img/project.png";
// import productImage from "../img/Products.png";

const ApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = "http://localhost:3001/api/project";

  useEffect(() => {
    axios
      .get(API_URL)
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
    <>
      <h1 className="title1">פרויקטים</h1>
      <div className="container">
        <div className="projects-section">
          {/* פרויקטים */}
          <></>
          <div className="projects-wrapper">
            {data.map((project) => (
              <div key={project._id} className="project-card">
                {/* תמונה */}
                <img
                  src={project.images[0]}
                  alt={project.nameOfProject}
                  className="project-image"
                />

                {/* פרטים */}
                <div className="project-details">
                  <p className="project-title1">{project.nameOfProject}</p>
                  <button
                    className="view-details-btn"
                    onClick={() => handleCardClick(project._id)}
                  >
                    צפה בפרויקט{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src={project} alt="projects" className="img-project" />

      </div>
    </>
  );
};

export default ApiComponent;
