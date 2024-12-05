import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAmbienteComponent } from './gestion-ambiente.component';

describe('GestionAmbienteComponent', () => {
  let component: GestionAmbienteComponent;
  let fixture: ComponentFixture<GestionAmbienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionAmbienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
