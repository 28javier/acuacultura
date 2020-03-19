import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styles: []
})
export class EspeciesComponent implements OnInit {

  constructor(private title: Title) {  
    this.title.setTitle('Especies');
  }

  ngOnInit(): void {
  }

}
