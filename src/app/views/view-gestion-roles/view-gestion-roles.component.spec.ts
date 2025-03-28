import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGestionRolesComponent } from './view-gestion-roles.component';

describe('ViewGestionRolesComponent', () => {
  let component: ViewGestionRolesComponent;
  let fixture: ComponentFixture<ViewGestionRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGestionRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewGestionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
