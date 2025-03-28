import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTrasladosComponent } from './gestion-traslados.component';

describe('GestionTrasladosComponent', () => {
  let component: GestionTrasladosComponent;
  let fixture: ComponentFixture<GestionTrasladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTrasladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTrasladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
