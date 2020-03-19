import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./Login.Component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router,
               private title: Title) {
      this.title.setTitle('AcuaculturaLogin');
                   }

  ngOnInit(): void {
    init_plugins();
  }


  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
