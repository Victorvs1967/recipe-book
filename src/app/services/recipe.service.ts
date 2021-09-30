import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/recipes/models/Ingredient.model';
import { Recipe } from '../components/recipes/models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'This is simply biryani', './assets/img/depositphotos_49622201-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg', [
      new Ingredient('Chicken', 1),
      new Ingredient('Rice', 20),
    ]),
    new Recipe('Chicken Noodles', 'This is simply noodles', './assets/img/a8e6ab8a9b7a68eb0d6eb2287416e0b9.jpg', [
      new Ingredient('Chicken', 1),
      new Ingredient('Noodles', 20),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngradients(ingredients);
  }

}
