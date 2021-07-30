import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('Monggos', 'Pork monggo is not your typical ginisang monggo dish because it was prepared differently. You just need to wash the beans after removing it from the packaging and cook it immediately – no soaking needed. This saves you time, which you can use to do other things.','https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg'),
  //   new Recipe('Menudo', 'In almost every Philippine town fiestas or gatherings, Pork Menudo can be seen in the dining table. This is one of the favorite “putahe” (dish) served and this was the reason why different variations of this dish existed. Many Pork Menudo recipes include hotdogs (pinoy red hotdogs), green peas, or garbanzos and others would add sun dried raisins too. ','https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg')
  // ];
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
