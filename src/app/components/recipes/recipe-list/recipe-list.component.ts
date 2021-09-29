import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeThatSelected = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('Chicken Biryani', 'This is simply biryani', './assets/img/depositphotos_49622201-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg'),
    new Recipe('Chicken Noodles', 'This is simply noodles', './assets/img/a8e6ab8a9b7a68eb0d6eb2287416e0b9.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeThatSelected.emit(recipe);
  }

}
