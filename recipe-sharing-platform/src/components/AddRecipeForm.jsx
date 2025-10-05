import React, { useState } from "react";

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    image: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

 
  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    if (!formData.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!formData.steps.trim()) newErrors.steps = "Steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Recipe added:", formData);
      alert("Recipe added successfully!");
      setFormData({
        title: "",
        summary: "",
        image: "",
        ingredients: "",
        steps: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">
        Add New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
       
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

       
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Summary
          </label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.summary ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter short description"
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
          )}
        </div>

      
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.image ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter image link"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image}</p>
          )}
        </div>

    
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="List the ingredients (comma-separated)"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

       
        <div>
          <label className="block text-gray-700 font-medium mb-2">Steps</label>
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter step-by-step instructions"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

       
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-2.5 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
