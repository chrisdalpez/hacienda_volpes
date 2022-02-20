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
import { DrinkListService } from './drink-list/drink-list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DrinkListComponent,
    TheLoungeComponent,
    RecipesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    

  ],
  providers: [DrinkListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
