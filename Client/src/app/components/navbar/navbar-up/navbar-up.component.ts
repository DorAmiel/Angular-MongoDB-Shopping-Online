import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

 
   loggedUser =JSON.parse(localStorage.getItem('user') || '{}');
   
  //  showDropDown(){


  
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.loggedUser.username);
  }

  


  
  

}
