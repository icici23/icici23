import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionOfPaperComponent } from './submission-of-paper.component';

describe('SubmissionOfPaperComponent', () => {
  let component: SubmissionOfPaperComponent;
  let fixture: ComponentFixture<SubmissionOfPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionOfPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionOfPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
