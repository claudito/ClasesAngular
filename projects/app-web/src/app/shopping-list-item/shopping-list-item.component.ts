import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit  {
  @Input() shopping_cart_list_items: any;

  ngOnInit() {
    console.log(this.shopping_cart_list_items.items);
  }

  totalItems(): number {
    let total = 0;
    if (this.shopping_cart_list_items.items) {
      for (let item of this.shopping_cart_list_items.items) {
        total += item.cantidad * item.precio;
      }
    }
    return total;
  }

}
