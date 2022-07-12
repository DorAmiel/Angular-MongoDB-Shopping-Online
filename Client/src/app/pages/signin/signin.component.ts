import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private userService: UserService, private router: Router) {
  }
  ngOnInit(): void {
  }

  async signIn(form: any) : Promise<any> {
    try {
      const user = await this.userService.getUserByUserNameAndPassword(form.value.username, form.value.password).toPromise()
      console.log(user)
      if (user) {
        this.router.navigate([''])
        localStorage.setItem('user', JSON.stringify(user))
      }
    }
    catch (err) {
      alert("Invalid username or password")
      console.log(err)
    }
  }
}
