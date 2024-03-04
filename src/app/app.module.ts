import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './views/recipe-details/recipe-details.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { GeekPipe } from './pipes/geek.pipe';
import { EmptyHomeComponent } from './views/home/empty-home/empty-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeFormComponent,
    RecipeDetailsComponent,
    NotFoundComponent,
    GeekPipe,
    EmptyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
