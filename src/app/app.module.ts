import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoproductoComponent } from './componentes/nuevoproducto.component';
import { ListarproductoComponent } from './componentes/listarproducto.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio.component';
import { NuevocategoriaComponent } from './componentes/nuevocategoria.component';
import { ListarcategoriaComponent } from './componentes/listarcategoria.component';
import { LoginComponent } from './componentes/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NuevoproductoComponent,
    ListarproductoComponent,
    InicioComponent,
    NuevocategoriaComponent,
    ListarcategoriaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
