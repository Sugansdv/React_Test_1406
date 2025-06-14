import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${meal.idMeal}`);
  };

  return (
    <div className="card h-100 shadow-sm" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img
        src={meal.strMealThumb}
        className="card-img-top"
        alt={meal.strMeal}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{meal.strMeal}</h5>
        <p className="card-text">
          <strong>Category:</strong> {meal.strCategory || 'N/A'}
        </p>
        <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
          Click to view full recipe
        </p>
      </div>
    </div>
  );
}
