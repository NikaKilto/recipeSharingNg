import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeList: Recipe[] = [];

  recipeAddedEvent:EventEmitter<any> = new EventEmitter();
  constructor() { }
  
}

export type Recipe =  {
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  image?: string;
}