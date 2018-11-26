import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe', 'This is simply a test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
