import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToStayComponent } from './places-to-stay.component';

describe('PlacesToStayComponent', () => {
  let component: PlacesToStayComponent;
  let fixture: ComponentFixture<PlacesToStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesToStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
