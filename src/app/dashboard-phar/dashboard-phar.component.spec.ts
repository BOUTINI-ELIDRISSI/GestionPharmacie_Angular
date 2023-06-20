import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPharComponent } from './dashboard-phar.component';

describe('DashboardPharComponent', () => {
  let component: DashboardPharComponent;
  let fixture: ComponentFixture<DashboardPharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
