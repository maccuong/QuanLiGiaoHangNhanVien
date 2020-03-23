import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemhanghoaComponent } from './themhanghoa.component';

describe('ThemhanghoaComponent', () => {
  let component: ThemhanghoaComponent;
  let fixture: ComponentFixture<ThemhanghoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemhanghoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemhanghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
