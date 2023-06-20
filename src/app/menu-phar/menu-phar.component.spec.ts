import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPharComponent } from './menu-phar.component';

describe('MenuPharComponent', () => {
  let component: MenuPharComponent;
  let fixture: ComponentFixture<MenuPharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
