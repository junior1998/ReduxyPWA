import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import * as usuariosActions from './store/actions';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba1';

  constructor(public store:Store<AppState>){}

  ngOnInit() {

    this.store.select('usuarios')
        .subscribe( usuarios => {

         console.log(usuarios)
        });

    this.store.dispatch( new usuariosActions.CargarUsuarios() );

  }
}
