import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

export default function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    API.get(`/lookup.php?i=${id}`).then((res) => {
      setRecipe(res.data.meals?.[0]);
    });
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} className="img-fluid rounded" alt="" />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
    </div>
  );
}
