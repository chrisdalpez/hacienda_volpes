import { Component } from '@angular/core';
import { Recipe } from './drink-list/recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'haciendaVolpes';

  recipes: Recipe[] = [
    {
      name:'Blue Lagoon',
      description:'Tasty blue lagoon',
      category: 'Longdrink',
      categoryColor: '#c1e45b',
      likes: 0,
      saved: false,
      imagePath: 'https://primochef.it/wp-content/uploads/2021/06/SH_cocktail_blue_lagoon-640x350.jpg',
    },
    
  ];
}
