import { Component } from 'nativescript-ng2-magic';
import { Router } from "@angular/router";

@Component({
  selector: 't4c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time4Care app works!';
  
  constructor(private router: Router) {

  }
  
  signIn() {
    this.router.navigate(["t4c-home"]);
  }
}
