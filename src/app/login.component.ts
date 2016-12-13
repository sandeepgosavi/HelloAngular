import { Component } from 'nativescript-ng2-magic';
import { Router } from "@angular/router";

@Component({
  selector: 't4c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Time4Care Login!';
  
  constructor(private router: Router) {

  }
  
  signIn() {
    this.router.navigate(["t4c-home"]);
  }
}
