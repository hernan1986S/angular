import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  date1 = new Date();

  currentYear = this.date1.getUTCFullYear();
  currentMonth = this.date1.getUTCMonth() + 1;
  currentDay = this.date1.getUTCDate();
  //YYYY-MM-DD
  TodayDate = "2022-08-11";

  FinalMonth : any;
  FinalDay : any;

  ngOnInit(): void {

    if(this.currentMonth < 10){
      this.FinalMonth = "0" + this.currentMonth;
    }else{
      this.FinalMonth = this.currentMonth;
    }

    if(this.currentDay < 10){
      this.FinalDay = "0" + this.currentDay;
    }else{
      this.FinalDay = this.currentDay;
    }


    this.TodayDate =  this.currentYear + "-" + this.FinalMonth + "-" + this.FinalDay;
  }

}
