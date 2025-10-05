import React, { useEffect, useState } from "react";
import recipesData from "../data.json";

export default function HomePage() {
  
  const [recipes, setRecipes] = useState([]);


  
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

 
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
     
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Recipe Sharing Platform
          </h1>
          <p className="text-gray-600 mt-2">
            Discover and share delicious recipes.
          </p>
        </header>

   <section className=" grid-cols-1 bg-gradient-to-b from-orange-100 to-orange-50 py-12 px-6 sm:px-10 lg:px-16 min-h-screen">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-8 text-center">
    Featured Recipes
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {recipes.map((recipe) => (
      <div
        key={recipe.id}
        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        {/* 🧡 Image Section */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-40 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
        </div>

        {/* 🧡 Content Section */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-semibold text-orange-700 mb-2">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {recipe.summary}
          </p>

          <button className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-orange-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            View Recipe
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </main>
  );
}

