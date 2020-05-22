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

  public getRecipeById(id: number): Recipe {
    return _.find(this.recipes, (recipe) => recipe.id === id);
  }

  public createRecipe(
    title: string,
    description: string,
    serves: string,
    imageUrl: string,
    ingredients: IIngredient[],
    instructions: string[]
  ) {
    const newRecipeData = {
      id: this.getNextId(),
    };
  }

  private getNextId(): number {
    const max = _.maxBy(this.recipes, (recipe) => recipe.id);
    return max.id + 1;
  }
}
