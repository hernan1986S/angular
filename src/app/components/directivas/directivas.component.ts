import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  variable1: number = 8;
  variable4: number = 5;
  variable6: number = 3;
  variable7: number = 10;
  variable2: string = 'Agustin'
  

  constructor() { }

  ngOnInit(): void {
  }

}
