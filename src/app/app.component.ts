import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página Inicial', url: '/folder/home', icon: 'home'},
    { title: 'Biblioteca', url: '/biblioteca', icon: 'book' },
    { title: 'Favoritos', url: '/favorito', icon: 'heart' },
    { title: 'Configurações', url: '/folder/configurações', icon: 'cog' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
