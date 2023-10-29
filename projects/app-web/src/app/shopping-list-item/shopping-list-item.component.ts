import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() shopping_cart_list_items: any;

  totalItems(): number {
    let total = 0;
    if (this.shopping_cart_list_items) {
      for (let item of this.shopping_cart_list_items) {
        total += item.cantidad * item.precio;
      }
    }
    return total;
  }

}
