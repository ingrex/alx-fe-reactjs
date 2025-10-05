import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams(); // get recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Recipe not found...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-700 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              Ingredients
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Cooking Steps */}
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              Cooking Instructions
            </h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
