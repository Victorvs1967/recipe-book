import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../../recipes/models/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountImput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingreName = this.nameInputRef.nativeElement.value;
    const ingreAmt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingreName, ingreAmt);
    this.shoppingListService.addIngradient(newIngredient);
  }

}
