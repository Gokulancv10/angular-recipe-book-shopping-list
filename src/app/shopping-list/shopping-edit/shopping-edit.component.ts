import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientNameInputValue: string = '';
  ingredientAmountInputValue: number = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  validateIngredientForm() {
    return (
      this.ingredientNameInputValue.length > 0 && this.ingredientAmountInputValue?.toString.length > 0
    ) ? false : true;
  }

  createIngredient() {
    const ingrediant = new Ingredient(this.ingredientNameInputValue, this.ingredientAmountInputValue);
    console.log(ingrediant);
  }

}
