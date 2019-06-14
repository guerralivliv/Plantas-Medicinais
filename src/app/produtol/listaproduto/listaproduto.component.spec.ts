import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprodutoComponent } from './listaproduto.component';

describe('ListaprodutoComponent', () => {
  let component: ListaprodutoComponent;
  let fixture: ComponentFixture<ListaprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
