import React, { useState } from "react";

export default function AddRecipeForm() {
  
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  
  const [error, setError] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!title || !ingredients || !steps) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()), 
      steps: steps.split(".").map((step) => step.trim()), 
    };

    console.log("✅ New Recipe Submitted:", newRecipe);
    alert("Recipe submitted successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-orange-50 py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Add a New Recipe
        </h1>

        {error && (
          <p className="text-red-500 text-center font-medium mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
        
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              placeholder="Enter recipe title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

        
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients (separate with commas)
            </label>
            <textarea
              placeholder="e.g., Flour, Sugar, Butter"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps (separate with periods)
            </label>
            <textarea
              placeholder="e.g., Mix ingredients. Bake for 30 minutes."
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-3 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-500 transition-all duration-300"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </main>
  );
}
