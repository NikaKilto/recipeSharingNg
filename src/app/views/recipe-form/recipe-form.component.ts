import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
})
export class RecipeFormComponent implements OnInit {
  recipeForm!: FormGroup;
  isEditing = false;
  index: string | undefined;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      ingredients: new FormControl(null, Validators.required),
      instructions: new FormControl(null, Validators.required),
      image: new FormControl(null)
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      this.index = params['id'];
      if (this.index) {
        const recipe = this.recipeService.recipeList[+this.index];
        this.recipeForm.setValue(recipe);
        if (this.index) {
          this.isEditing = true;
        }
      }
    });
  }

  submitForms() {
    if (this.isEditing) {
      this.recipeService.recipeList[+this.index!] = this.recipeForm.value;
    } else {
      this.recipeService.recipeList.push(this.recipeForm.value);
      this.recipeForm.reset();
    }
    this.router.navigate(['/']);
    console.log(this.recipeForm)
  }
}
