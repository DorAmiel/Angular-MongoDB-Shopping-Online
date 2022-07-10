import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  cities = ['Jerusalem', 'Tel Aviv','Haifa','Beer Sheva','Ashdod','Rishon LeZion','Rehovot','Netanya','Bat Yam','Ramat Gan','Ashqelon','Ashkelon','Bnei Brak','Eilat','Givatayim','Hadera','Herzliya','Holon','Kfar Saba','Mevo Betar','Netivot',];
  showNextStep:boolean=true
  showLastStep:boolean=false
  
  toggleSteps(){
   this.showNextStep=!this.showNextStep 
   this.showLastStep=!this.showLastStep
  }

}
