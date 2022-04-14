import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cuenta', url: '/cuenta', icon: 'settings' },
    { title: 'Clientes', url: '/clientes', icon: 'person' },
    { title: 'Prestamos', url: '/folder/Outbox', icon: 'cash' },
    { title: 'Banco', url: '/folder/Outbox', icon: 'business' },
    { title: 'Cobros', url: '/folder/Outbox', icon: 'card' },
    { title: 'ingresos', url: '/folder/Outbox', icon: 'thumbs-up' },
    { title: 'Egresos', url: '/folder/Outbox', icon: 'thumbs-down' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
    { title: 'Salir', url: '/folder/Outbox', icon: 'exit' },

  ];

  constructor() {}
}
