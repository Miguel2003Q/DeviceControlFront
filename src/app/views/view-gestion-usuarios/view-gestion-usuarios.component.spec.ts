import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionUsuariosComponent } from './view-gestion-usuarios.component';

describe('ViewGestionUsuariosComponent', () => {
  let component: ViewGestionUsuariosComponent;
  let fixture: ComponentFixture<ViewGestionUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
