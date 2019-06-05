import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtextComponent } from './midtext.component';

describe('MidtextComponent', () => {
  let component: MidtextComponent;
  let fixture: ComponentFixture<MidtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
