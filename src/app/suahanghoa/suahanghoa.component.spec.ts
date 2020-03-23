import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuahanghoaComponent } from './suahanghoa.component';

describe('SuahanghoaComponent', () => {
  let component: SuahanghoaComponent;
  let fixture: ComponentFixture<SuahanghoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuahanghoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuahanghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
