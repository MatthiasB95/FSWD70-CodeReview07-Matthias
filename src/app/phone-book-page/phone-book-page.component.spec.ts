import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookPageComponent } from './phone-book-page.component';

describe('PhoneBookPageComponent', () => {
  let component: PhoneBookPageComponent;
  let fixture: ComponentFixture<PhoneBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
