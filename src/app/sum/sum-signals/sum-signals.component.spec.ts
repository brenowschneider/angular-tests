import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumSignalsComponent } from './sum-signals.component';

describe('SumSignalsComponent', () => {
  let component: SumSignalsComponent;
  let fixture: ComponentFixture<SumSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SumSignalsComponent]
    });
    fixture = TestBed.createComponent(SumSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
