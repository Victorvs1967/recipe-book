import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../components/recipes/models/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredietsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngradient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredietsChanged.emit(this.ingredients.slice());
  }

  addIngradients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngradient(ingredient);
    }
  }
}
