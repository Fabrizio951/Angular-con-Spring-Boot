import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarproductoComponent } from './componentes/listarproducto.component';
import { NuevoproductoComponent } from './componentes/nuevoproducto.component';
import { NuevocategoriaComponent } from './componentes/nuevocategoria.component';
import { ListarcategoriaComponent } from './componentes/listarcategoria.component';
import { InicioComponent } from './componentes/inicio.component';
import { LoginComponent } from './componentes/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'InicioI', component: InicioComponent},
  {path: 'ListarProducto', component: ListarproductoComponent},
  {path: 'NuevoProducto', component: NuevoproductoComponent},
  {path: 'Nuevocategoria', component: NuevocategoriaComponent},
  {path: 'ListarCategoria', component: ListarcategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
