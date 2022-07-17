import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  ingredients: Ingredient[] = [
    new Ingredient("Garlic", 2),
    new Ingredient("Tomato Chopped", 3)
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

}
