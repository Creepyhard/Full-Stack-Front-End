import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleUserComponent } from './detele-user.component';

describe('DeteleUserComponent', () => {
  let component: DeteleUserComponent;
  let fixture: ComponentFixture<DeteleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
