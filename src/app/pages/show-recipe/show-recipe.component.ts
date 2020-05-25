import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Location } from '@angular/common';
import { Recipe } from 'src/app/classes/recipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss'],
})
export class ShowRecipeComponent implements OnInit {
  private subcription: Subscription[] = [];
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subcription.push(
      this.route.paramMap.subscribe((params) => {
        const recipeId = params.get('id');
        this.recipe = this.recipeService.getRecipeById(parseInt(recipeId));
      })
    );
  }
}
