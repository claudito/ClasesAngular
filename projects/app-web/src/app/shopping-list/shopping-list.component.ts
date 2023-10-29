import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input()  shopping_cart_list:any;

  ngOnInit() {
    console.log(  this.shopping_cart_list.items  );
  }

}
