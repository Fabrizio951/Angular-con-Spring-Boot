import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcategoriaComponent } from './listarcategoria.component';

describe('ListarcategoriaComponent', () => {
  let component: ListarcategoriaComponent;
  let fixture: ComponentFixture<ListarcategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarcategoriaComponent]
    });
    fixture = TestBed.createComponent(ListarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
