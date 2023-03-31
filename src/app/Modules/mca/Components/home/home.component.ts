import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade',[
       transition('void => *' ,[
         style({opacity:1 }),
          animate(500)
       ]),
       transition('* => void',[
         animate(500,style({opacity:0}))
       ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    setTimeout(()=>{
      document.getElementById('scroll')?.scrollIntoView()
    },1)
    
  }

}
