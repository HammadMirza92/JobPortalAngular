import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobClassesComponent } from './job-classes.component';

describe('JobClassesComponent', () => {
  let component: JobClassesComponent;
  let fixture: ComponentFixture<JobClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
