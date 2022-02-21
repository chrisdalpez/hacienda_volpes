import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { TheLoungeComponent } from './the-lounge/the-lounge.component';
import { RecipesComponent } from './drink-list/recipes/recipes.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DrinkdialogComponent } from './drinkdialog/drinkdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DrinkListComponent,
    TheLoungeComponent,
    RecipesComponent,
    DrinkdialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
