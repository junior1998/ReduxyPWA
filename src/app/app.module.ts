import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Redux
import { StoreModule } from '@ngrx/store';

import { appReducers } from './store/app.reducer';
import { effectsArr } from './store/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { EffectsModule } from '@ngrx/effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { RegistrarUsuarioComponent } from './components/pages/registrar-usuario/registrar-usuario.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { Prueba1Component } from './components/pages/prueba1/prueba1.component';
import { Prueba2Component } from './components/pages/prueba2/prueba2.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarUsuarioComponent,
    NavbarComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( effectsArr ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
