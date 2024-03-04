import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { RecipeFormComponent } from './views/recipe-form/recipe-form.component';
import { RecipeDetailsComponent } from './views/recipe-details/recipe-details.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipe-form', component: RecipeFormComponent},
  {path: 'recipe-details', component: RecipeDetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
