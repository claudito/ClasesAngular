import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list-item/shopping-list-item.component';
import { ShoppingListTotalComponent } from './shopping-list-total/shopping-list-total.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListTotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ShoppingCartComponent]
})
export class AppModule { }
