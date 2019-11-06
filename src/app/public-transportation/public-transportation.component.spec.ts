import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTransportationComponent } from './public-transportation.component';

describe('PublicTransportationComponent', () => {
  let component: PublicTransportationComponent;
  let fixture: ComponentFixture<PublicTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
