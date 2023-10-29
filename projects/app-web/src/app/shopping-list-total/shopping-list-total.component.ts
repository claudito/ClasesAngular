import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-web-shopping-list-total',
  templateUrl: './shopping-list-total.component.html',
  styleUrls: ['./shopping-list-total.component.css']
})
export class ShoppingListTotalComponent {
  @Input()  shopping_cart_list_total:any;
  ngOnInit() {
    console.log(this.shopping_cart_list_total);
  }

  subtotal(): number {
    let subtotal = 0;
    if (this.shopping_cart_list_total.items) {
      for (let item of this.shopping_cart_list_total.items) {
        subtotal += item.cantidad * item.precio;
      }
    }
    return parseFloat(subtotal.toFixed(2));
  }

  impuesto(): number{
     let igv = (this.subtotal() *  this.shopping_cart_list_total.igv ) /100;
     return parseFloat(igv.toFixed(2));
  }

  total():string{
      let total = this.subtotal() + this.impuesto();
      return total.toFixed(2);
  }


}
