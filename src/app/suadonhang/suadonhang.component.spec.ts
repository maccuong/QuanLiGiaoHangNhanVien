import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuadonhangComponent } from './suadonhang.component';

describe('SuadonhangComponent', () => {
  let component: SuadonhangComponent;
  let fixture: ComponentFixture<SuadonhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuadonhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuadonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
