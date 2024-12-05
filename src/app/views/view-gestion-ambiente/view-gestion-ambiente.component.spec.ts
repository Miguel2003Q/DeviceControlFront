import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionAmbienteComponent } from './view-gestion-ambiente.component';

describe('ViewGestionAmbienteComponent', () => {
  let component: ViewGestionAmbienteComponent;
  let fixture: ComponentFixture<ViewGestionAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionAmbienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
