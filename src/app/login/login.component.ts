import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./Login.Component.css']
})
export class LoginComponent implements OnInit {

  constructor( public route: Router) { }

  ngOnInit(): void {
  }


  ingresar() {
    // this.route.navigate(['/dashboard']);
  }

}
