import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  lastName!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;

  registerValid!: boolean;
  hide1 =  true;
  hide2 =  true;


  constructor(private userService: UserService, private router: Router) {}

  register() {  
    const user = { name: this.name, lastName: this.lastName, email: this.email, password: this.password };
    /*
    this.userService.register(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    }); */
    console.log(user);
  }

  ngOnInit(): void {
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }
}
