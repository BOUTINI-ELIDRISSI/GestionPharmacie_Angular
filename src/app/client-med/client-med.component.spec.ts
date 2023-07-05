import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMedComponent } from './client-med.component';

describe('ClientMedComponent', () => {
  let component: ClientMedComponent;
  let fixture: ComponentFixture<ClientMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientMedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
