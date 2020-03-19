import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Usuarios');
  }

  ngOnInit(): void {
  }

}
