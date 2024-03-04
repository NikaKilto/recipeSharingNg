import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public recipeService: RecipeService, private router: Router) {}

  onDetails(index: number) {
    this.router.navigate(['/recipe-details'], { queryParams: { id: index } });
  }

  onEdit(index: number) {
    this.router.navigate(['/recipe-form'], { queryParams: { id: index } });
  }

  onDelete(index: number) {
    this.recipeService.recipeList.splice(index, 1);
  }
}
