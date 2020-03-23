import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemNhanViensComponent } from './them-nhan-viens.component';

describe('ThemNhanViensComponent', () => {
  let component: ThemNhanViensComponent;
  let fixture: ComponentFixture<ThemNhanViensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemNhanViensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemNhanViensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
