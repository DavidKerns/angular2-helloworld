import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewNestedComponent } from './my-new-nested.component';

describe('MyNewNestedComponent', () => {
  let component: MyNewNestedComponent;
  let fixture: ComponentFixture<MyNewNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
