import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import FavoriteButton from './components/FavoriteButton';
import { useRecipeStore } from './components/recipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes);

  return (
    <div>
      <h1> Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} />
        </div>
      ))}

      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
