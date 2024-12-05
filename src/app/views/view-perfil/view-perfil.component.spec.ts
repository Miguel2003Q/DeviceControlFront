import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPerfilComponent } from './view-perfil.component';

describe('ViewPerfilComponent', () => {
  let component: ViewPerfilComponent;
  let fixture: ComponentFixture<ViewPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
