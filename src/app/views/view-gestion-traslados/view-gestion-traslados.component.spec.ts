import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionTrasladosComponent } from './view-gestion-traslados.component';

describe('ViewGestionTrasladosComponent', () => {
  let component: ViewGestionTrasladosComponent;
  let fixture: ComponentFixture<ViewGestionTrasladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionTrasladosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionTrasladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
