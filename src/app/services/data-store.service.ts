import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recipe } from '../components/recipes/models/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(environment.fbURL, recipes).subscribe(response => console.log(response));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(environment.fbURL).subscribe(recipes => this.recipeService.setRecipes(recipes));
  }

}
