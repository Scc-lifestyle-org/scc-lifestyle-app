import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyoneOverComponent } from './twentyone-over.component';

describe('TwentyoneOverComponent', () => {
  let component: TwentyoneOverComponent;
  let fixture: ComponentFixture<TwentyoneOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyoneOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyoneOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
