import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndtextComponent } from './endtext.component';

describe('EndtextComponent', () => {
  let component: EndtextComponent;
  let fixture: ComponentFixture<EndtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
