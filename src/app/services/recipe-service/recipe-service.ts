import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Strogonof de Frango',
      imageUrl: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg',
      ingredients: ['Frango', 'creme de leite', 'molho de tomate', 'ketchup']
    },
    {
      id: 'r2',
      title: 'Pizza Calabresa',
      imageUrl: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600_square.jpg',
      ingredients: ['massa de pizza', 'molho de tomate', 'queijo', 'calabresa']
    }
  ]

  getAllRecipes() {
    if (!this.recipes) {
      return;
    }

    return [...this.recipes]
  }

  getRecipe(recipeId: string): Recipe | undefined {
    if (!recipeId) {
      return;
    }

    const foundRecipe = this.recipes.find(recipe => recipe.id === recipeId);

    if (!foundRecipe) {
      return;
    }

    return { ...foundRecipe }
  }
  
}
