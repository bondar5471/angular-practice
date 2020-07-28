import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(environment.apiRecipesUrl, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(environment.apiRecipesUrl).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
        });
      }),
      tap((recipes) => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
