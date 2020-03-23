import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanViensComponent } from './nhan-viens.component';

describe('NhanViensComponent', () => {
  let component: NhanViensComponent;
  let fixture: ComponentFixture<NhanViensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanViensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanViensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
