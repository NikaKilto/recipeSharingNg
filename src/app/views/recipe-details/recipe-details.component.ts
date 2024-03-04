import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe, RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent implements OnInit {
  id!:number;

  constructor(
    public recipeService: RecipeService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.id = params['id'];
    } );
  }
  onClick() {
    this.router.navigate(['recipe-form']);
  }
}
