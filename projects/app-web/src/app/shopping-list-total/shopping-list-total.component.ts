import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-web-shopping-list-total',
  templateUrl: './shopping-list-total.component.html',
  styleUrls: ['./shopping-list-total.component.css']
})
export class ShoppingListTotalComponent {
  @Input()  shopping_cart_list_total:any;
  @Input()  shopping_cart_cab:any;
  test = "test";
  ngOnInit() {
    console.log(this.shopping_cart_list_total);
  }

  subtotal(): number {
    let total = 0;
    if (this.shopping_cart_list_total) {
      for (let item of this.shopping_cart_list_total) {
        total += item.cantidad * item.precio;
      }
    }
    return total;
  }

  impuesto(): number{
     let igv = (this.subtotal() *  this.shopping_cart_cab.igv ) /100;
    return  igv;
  }


  total():number{
      let total = this.subtotal() + this.impuesto();
      return total;
  }


}