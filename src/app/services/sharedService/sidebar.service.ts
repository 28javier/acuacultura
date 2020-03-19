import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
{
  titulo: 'Especies',
  icono: 'fas fa-fish',
  submenu: [
    {titulo: 'Logica Especies', url: '/especies'}
  ]

},
{
  titulo: 'Usuarios',
  icono: 'fas fa-users',
  submenu: [
    {titulo: 'Usuarios', url: '/usuarios'}
  ]

},
  ];

  constructor() { }
}
