import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../login';
import { UserService } from '../login.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Register } from 'src/app/register/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/*
export class LoginComponent implements OnInit, OnDestroy {
  
  public loginValid = true;
  email!: string;
  password!: string;

  private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  public ngOnInit(): void {
    this.userService.isAuthenticated$.pipe(
      filter((isAuthenticated: boolean) => isAuthenticated),
      takeUntil(this._destroySub$)
    ).subscribe( _ => this.router.navigateByUrl(this.returnUrl));
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public onSubmit(): void {
    this.loginValid = true;

    this.userService.login(this.email, this.password).pipe(
      take(1)
    ).subscribe({
      next: _ => {
        this.loginValid = true;
        this.router.navigateByUrl('/home');
      },
      error: _ => this.loginValid = false
    });
  }
} */


export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  registers$! : Observable<Register[]>;
  login$!: Observable<User>;

  selectUsername!: string;
  loginValid!: boolean;
  hide =  true;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(){
    //buscar user con el email y el password introducido
    const user = {email: this.email, password: this.password};
    
    /*
    this.userService.getLogin(user).subscribe(data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/');
    },
    error => {
      console.log(error);
    });
    console.log(user);
    */
  }

  gotoHome(){
    this.router.navigate(['/home']);
  }
}
