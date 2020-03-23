import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuanhanvienComponent } from './suanhanvien.component';

describe('SuanhanvienComponent', () => {
  let component: SuanhanvienComponent;
  let fixture: ComponentFixture<SuanhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuanhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuanhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
