import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductoComponent } from './listarproducto.component';

describe('ListarproductoComponent', () => {
  let component: ListarproductoComponent;
  let fixture: ComponentFixture<ListarproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarproductoComponent]
    });
    fixture = TestBed.createComponent(ListarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
