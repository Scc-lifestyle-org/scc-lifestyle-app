import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorEventsComponent } from './outdoor-events.component';

describe('OutdoorEventsComponent', () => {
  let component: OutdoorEventsComponent;
  let fixture: ComponentFixture<OutdoorEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutdoorEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutdoorEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
