import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionReportesComponent } from './view-gestion-reportes.component';

describe('ViewGestionReportesComponent', () => {
  let component: ViewGestionReportesComponent;
  let fixture: ComponentFixture<ViewGestionReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionReportesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
