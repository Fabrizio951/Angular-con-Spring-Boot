import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevocategoriaComponent } from './nuevocategoria.component';

describe('NuevocategoriaComponent', () => {
  let component: NuevocategoriaComponent;
  let fixture: ComponentFixture<NuevocategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevocategoriaComponent]
    });
    fixture = TestBed.createComponent(NuevocategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
