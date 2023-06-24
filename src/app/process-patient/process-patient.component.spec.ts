import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessPatientComponent } from './process-patient.component';

describe('ProcessPatientComponent', () => {
  let component: ProcessPatientComponent;
  let fixture: ComponentFixture<ProcessPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
