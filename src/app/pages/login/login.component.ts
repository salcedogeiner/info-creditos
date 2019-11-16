import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/authentication/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  signUp() {
    console.log('entro a up');
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    console.log('entro a In');
    this.authenticationService.SignIn(this.email, this.password)
    .then(res => {
      this.email = '';
      this.password = '';
      console.log('Successfully signed in!', res);
      this.router.navigate(['users']);
    })
    .catch(err => {
      console.log('Something is wrong:', err.message);
      alert('Invalid credentials');
    });
  }

  signOut() {
    this.authenticationService.SignOut();
  }
}
