import { Component } from '@angular/core';

@Component({
  selector: 'app-web-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  shopping_cart = {
    "title":"Tienda Virtual",
    "pagina":"Checkout",
    "delivery":"Si",
    "direccion":"Calle Loma Umbrosa 000, Surco",
    "igv": 18,
    "moneda": "S/.",
    "metodo_pago": "Tarjeta(Visa)",
    "items": [
      {
        "item": 1,
        "codigo": "AB0001",
        "descripcion": "Soporte de Celulares",
        "cantidad": 2,
        "precio": 20,
        "moneda": "S/."
      },
      {
        "item": 2,
        "codigo": "AB0002",
        "descripcion": "Soporte de Laptops",
        "cantidad": 10,
        "precio": 33.29,
        "moneda": "S/."
      },
      {
        "item": 3,
        "codigo": "AB0003",
        "descripcion": "Micrófono PodCast Negro",
        "cantidad": 20,
        "precio": 549.2,
        "moneda": "S/."
      }

    ]
  };


  constructor(){
   // console.log( this.shopping_cart  );
  }
}
