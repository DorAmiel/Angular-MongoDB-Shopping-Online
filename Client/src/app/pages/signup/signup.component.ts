import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  cities = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Beer Sheva', 'Ashdod', 'Rishon LeZion', 'Rehovot', 'Netanya', 'Bat Yam', 'Ramat Gan', 'Ashqelon', 'Ashkelon', 'Bnei Brak', 'Eilat', 'Givatayim', 'Hadera', 'Herzliya', 'Holon', 'Kfar Saba', 'Mevo Betar', 'Netivot',];
  showNextStep: boolean = true
  showLastStep: boolean = false

  myUser: User = new User()
  constructor(private userService: UserService, private router: Router) {
    this.myUser.role = 'user'
  }


  toggleSteps() {
    this.showNextStep = !this.showNextStep
    this.showLastStep = !this.showLastStep
  }

  validateUserName(username: string): any {
    try {
      this.userService.getUserByUserName(username).subscribe(user => {
        alert('User name already exists')
        return false
      })
    } catch (err) {
      console.log(err + ' user name is valid');
      console.log('username is valid');
      return true
    }
  }


  validateFormOne(form: any) {
    if (form.valid) {
      if (!this.validateUserName(form.value.username)) {
        return
      }
      if (form.value.password === form.value.confirmPassword) {
        this.myUser.password = form.value.password
        this.myUser.username = form.value.username
        this.myUser.idNumber = form.value.idNumber
        this.toggleSteps()
        console.log(this.myUser)
      }
      else {
        alert('Passwords do not match')
      }
    }
  }

  validateFormTwo(form: any) {
    if (form.valid) {
      if (!this.validateUserName(form.value.username)) {
        return
      }
      this.myUser.firstName = form.value.firstName
      this.myUser.lastName = form.value.lastName
      this.myUser.city = form.value.city
      this.myUser.street = form.value.street
      console.log(this.myUser)
      this.userService.addUser(this.myUser).subscribe(msg => {
        alert('User added successfully')
        this.router.navigate(['/signin'])
      })
    }
  }
}
