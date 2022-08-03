import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  cities = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beer Sheva', 'Ashdod', 'Rishon LeZion', 'Rehovot', 'Netanya', 'Bat Yam', 'Ramat Gan', 'Ashqelon', 'Ashkelon', 'Bnei Brak', 'Eilat', 'Givatayim', 'Hadera', 'Herzliya', 'Holon', 'Kfar Saba', 'Mevo Betar', 'Netivot',];
  //today date
  today = new Date();
  year = this.today.getFullYear();
  month = this.today.getMonth() + 1
  day = this.today.getDate();
  currentDate = ''


  constructor() { }

  ngOnInit(): void {
    if (this.day < 10 && this.month < 10) {
      this.currentDate = this.year + '-0' + this.month + '-0' + this.day;
    }
    else if (this.day < 10 && this.month >= 10) {
      this.currentDate = this.year + '-' + this.month + '-0' + this.day;
    }
    else if (this.day >= 10 && this.month < 10) {
      this.currentDate = this.year + '-0' + this.month + '-' + this.day;
    }
    else {
      this.currentDate = this.year + '-' + this.month + '-' + this.day;
    }
  }

}
