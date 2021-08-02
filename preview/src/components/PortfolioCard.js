import React from "react";

const PortfolioCard = () => {
  return (
    <div>
      <div classNameName="card mb-3">
        <h3 className="card-header"></h3>
        <div className="card-body">
          <h4 className="card-title">The Dairy Farm</h4>
          <h6 className="card-subtitle text-muted">3 Bedroom</h6>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-block user-select-none"
          width="100%"
          height="200"
          aria-label="Placeholder: Image cap"
          focusable="false"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 318 180"
          style={{ fontSize: "1.125rem", textAnchor: "middle" }}
        >
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Image cap
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">Input Bulk of Content here</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Bullet point 1</li>
          <li className="list-group-item">Bullet point 2</li>
          <li className="list-group-item">Bullet point 3</li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
