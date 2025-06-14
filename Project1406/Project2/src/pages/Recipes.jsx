import React, { useEffect, useState } from 'react';
import API from '../api';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLetter, setSearchLetter] = useState('b');

  useEffect(() => {
    // If empty letter, skip fetch and clear recipes
    if (!searchLetter) {
      setRecipes([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    API.get(`/search.php?f=${searchLetter}`)
      .then((res) => {
        const data = res.data.meals;
        setRecipes(data ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setRecipes([]);
        setLoading(false);
      });
  }, [searchLetter]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Browse Recipes</h2>

      <div className="mb-4">
        <label className="form-label">Search by first letter:</label>
        <input
          type="text"
          maxLength={1}
          value={searchLetter}
          onChange={(e) => {
            const val = e.target.value.toLowerCase();
            if (/^[a-z]?$/.test(val)) {
              setSearchLetter(val);
            }
          }}
          className="form-control w-25"
          placeholder="Enter a letter (a-z)"
        />
      </div>

      {loading ? (
        <p>Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes found for "{searchLetter}".</p>
      ) : (
        <div className="row">
          {recipes.map((meal) => (
            <div className="col-md-4 mb-4" key={meal.idMeal}>
              <RecipeCard meal={meal} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
