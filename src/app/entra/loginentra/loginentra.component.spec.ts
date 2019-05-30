import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginentraComponent } from './loginentra.component';

describe('LoginentraComponent', () => {
  let component: LoginentraComponent;
  let fixture: ComponentFixture<LoginentraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginentraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginentraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
