import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-committe',
  templateUrl: './committe.component.html',
  styleUrls: ['./committe.component.css']
})
export class CommitteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
