import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/classes/recipe';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
})
export class EditRecipeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private recipe: Recipe;
  private instructions: FormArray;
  private ingredients: FormArray;
  public recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        const recipeId = params.get('id');
        this.recipe = this.recipeService.getRecipeById(parseInt(recipeId));
        this.createForm();
      })
    );
  }

  private createForm(): void {
    this.recipeForm = this.fb.group({
      title: [this.recipe.title, [Validators.required]],
      description: [this.recipe.description, [Validators.required]],
      serves: [this.recipe.serves, [Validators.required]],
      imageUrl: [this.recipe.imageUrl, [Validators.required]],
      instructions: this.fb.array([]),
      ingredients: this.fb.array([]),
    });
  }

  back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
