import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountDetailsComponent } from './user-account-details.component';

describe('UserAccountDetailsComponent', () => {
  let component: UserAccountDetailsComponent;
  let fixture: ComponentFixture<UserAccountDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
