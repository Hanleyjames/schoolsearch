import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingtextComponent } from './landingtext.component';

describe('LandingtextComponent', () => {
  let component: LandingtextComponent;
  let fixture: ComponentFixture<LandingtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
