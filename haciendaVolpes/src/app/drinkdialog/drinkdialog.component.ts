import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../drink-list/recipes/recipe.model';
import { RecipesComponent } from '../drink-list/recipes/recipes.component';


@Component({
  selector: 'app-drinkdialog',
  templateUrl: './drinkdialog.component.html',
  styleUrls: ['./drinkdialog.component.css']
})
export class DrinkdialogComponent implements OnInit {

  backupRecipe: Partial<Recipe> = { ...this.data.recipe}; // backup recipe is a copy of the recipe passed in the data object.

  constructor(
    public dialogRef: MatDialogRef<DrinkdialogComponent>,
    private recipesComponent: RecipesComponent,
    @Inject(MAT_DIALOG_DATA) public data: DrinkdialogData //data object to the open method stored in drink-list component.

  ) {}

  

  cancel(): void {
    this.backupRecipe.name = this.data.recipe.name;
    this.backupRecipe.imagePath = this.data.imagePath;
    this.backupRecipe.description = this.data.recipe.description;
    this.backupRecipe.category = this.data.recipe.category;
    this.dialogRef.close(this.data); //closes the dialog and custom recipe is discared
  }

  ngOnInit(): void {
  }
}

export interface DrinkdialogData {
  imagePath: string | undefined;
  recipe: Partial<Recipe>; 
  enableDelete: boolean;
}

export interface DrinkDialogResult {
  recipe: Recipe;
  delete?: boolean;
}