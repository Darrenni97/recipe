import { IIngredient } from './../interfaces/ingredient';
import { Recipe } from './../classes/recipe';
import { Injectable } from '@angular/core';
import * as RecipeData from '../../data.json';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];

  constructor() {
    (<any>RecipeData).recipes.forEach((recipe) => {
      this.recipes.push(new Recipe(recipe));
    });
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }
}
