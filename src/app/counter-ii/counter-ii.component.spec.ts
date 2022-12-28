import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIIComponent } from './counter-ii.component';

describe('CounterIIComponent', () => {
  let component: CounterIIComponent;
  let fixture: ComponentFixture<CounterIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
