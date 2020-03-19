import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  titulo: string;

  constructor( private route: Router,
               private title: Title ) {
                 this.title.setTitle('Dashboard');
               }

  ngOnInit(): void {
  }

}
