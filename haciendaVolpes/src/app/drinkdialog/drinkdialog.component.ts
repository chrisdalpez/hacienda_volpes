import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../drink-list/recipes/recipe.model';


@Component({
  selector: 'app-drinkdialog',
  templateUrl: './drinkdialog.component.html',
  styleUrls: ['./drinkdialog.component.css']
})
export class DrinkdialogComponent implements OnInit {

  private backupRecipe: Partial<Recipe> = { ...this.data.recipe }; // backup recipe is a copy of the recipe passed in the data object.

  constructor(
    public dialogRef: MatDialogRef<DrinkdialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DrinkdialogData //data object to the open method stored in drink-list component.

  ) {}

  cancel(): void {
    this.data.recipe.name = this.backupRecipe.name;
    this.data.imagePath = this.backupRecipe.imagePath;
    this.data.recipe.description = this.backupRecipe.description;
    this.data.recipe.category = this.backupRecipe.category;
    this.dialogRef.close(this.data.recipe); //closes the dialog and custom recipe is discared
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