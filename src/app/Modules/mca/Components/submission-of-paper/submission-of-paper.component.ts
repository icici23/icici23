import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-submission-of-paper',
  templateUrl: './submission-of-paper.component.html',
  styleUrls: ['./submission-of-paper.component.css']
})
export class SubmissionOfPaperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
