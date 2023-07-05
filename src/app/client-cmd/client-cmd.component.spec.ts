import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCmdComponent } from './client-cmd.component';

describe('ClientCmdComponent', () => {
  let component: ClientCmdComponent;
  let fixture: ComponentFixture<ClientCmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
