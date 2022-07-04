import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  cities = ['Jerusalem', 'Tel Aviv','Haifa','Beer Sheva','Ashdod','Rishon LeZion','Rehovot','Netanya','Bat Yam','Ramat Gan','Ashqelon','Ashkelon','Bnei Brak','Eilat','Givatayim','Hadera','Herzliya','Holon','Kfar Saba','Mevo Betar','Netivot',];
  
  constructor() { }

  ngOnInit(): void {
  }

}
