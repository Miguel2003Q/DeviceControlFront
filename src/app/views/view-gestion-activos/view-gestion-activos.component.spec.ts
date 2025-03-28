import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionActivosComponent } from './view-gestion-activos.component';

describe('ViewGestionActivosComponent', () => {
  let component: ViewGestionActivosComponent;
  let fixture: ComponentFixture<ViewGestionActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionActivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
