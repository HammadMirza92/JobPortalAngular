import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAppliedJobsComponent } from './all-applied-jobs.component';

describe('AllAppliedJobsComponent', () => {
  let component: AllAppliedJobsComponent;
  let fixture: ComponentFixture<AllAppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAppliedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
