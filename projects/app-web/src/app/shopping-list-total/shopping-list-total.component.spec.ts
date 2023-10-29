import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTotalComponent } from './shopping-list-total.component';

describe('ShoppingListTotalComponent', () => {
  let component: ShoppingListTotalComponent;
  let fixture: ComponentFixture<ShoppingListTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListTotalComponent]
    });
    fixture = TestBed.createComponent(ShoppingListTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
