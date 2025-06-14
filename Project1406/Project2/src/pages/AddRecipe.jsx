import React, { useState, useEffect } from 'react';
import withValidation from '../hoc/withValidation';
import ImageUploadModal from '../components/ImageUploadModal';

function AddRecipe({ isValid }) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    instructions: '',
    image: null, // base64 string or null
  });
  const [customRecipes, setCustomRecipes] = useState([]);
  const [showUploader, setShowUploader] = useState(false);

  // Load recipes from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('customRecipes')) || [];
    setCustomRecipes(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid(form)) {
      alert('All fields are required!');
      return;
    }

    const newRecipe = {
      id: Date.now(),
      ...form,
    };

    const updatedRecipes = [newRecipe, ...customRecipes];
    setCustomRecipes(updatedRecipes);
    localStorage.setItem('customRecipes', JSON.stringify(updatedRecipes));

    // Reset form
    setForm({
      title: '',
      category: '',
      instructions: '',
      image: null,
    });
  };

  // Convert uploaded file to base64 string
  const handleImageSelect = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
      setShowUploader(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mt-4">
      <h2>Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Instructions"
          rows={4}
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
        />

        {/* Image upload button and preview */}
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowUploader(true)}
          >
            {form.image ? 'Change Image' : 'Upload Image'}
          </button>

          {form.image && (
            <div className="mt-3">
              <img
                src={form.image}
                alt="Recipe"
                style={{ maxWidth: '100%', maxHeight: 200, borderRadius: 8 }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <h4>Custom Recipes You've Added:</h4>
      {customRecipes.length === 0 ? (
        <p>No custom recipes added yet.</p>
      ) : (
        <div className="row">
          {customRecipes.map((recipe) => (
            <div key={recipe.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-img-top"
                    style={{ maxHeight: 180, objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p>
                    <strong>Category:</strong> {recipe.category}
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>{recipe.instructions}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ImageUploadModal
        show={showUploader}
        onClose={() => setShowUploader(false)}
        onImageSelect={handleImageSelect}
      />
    </div>
  );
}

export default withValidation(AddRecipe);
