import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeThatSelected = new EventEmitter();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeThatSelected.emit(recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
