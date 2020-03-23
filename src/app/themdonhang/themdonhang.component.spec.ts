import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemdonhangComponent } from './themdonhang.component';

describe('ThemdonhangComponent', () => {
  let component: ThemdonhangComponent;
  let fixture: ComponentFixture<ThemdonhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemdonhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemdonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
