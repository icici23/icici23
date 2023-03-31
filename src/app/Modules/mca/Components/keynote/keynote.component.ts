import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-keynote',
  templateUrl: './keynote.component.html',
  styleUrls: ['./keynote.component.css']
})
export class KeynoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
