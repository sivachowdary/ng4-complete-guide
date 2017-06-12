import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is simple test recipe', '../../assets/images/Recipe_logo.jpeg'),
    new Recipe('Recipe 2', 'This is simple test another recipe', '../../assets/images/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
