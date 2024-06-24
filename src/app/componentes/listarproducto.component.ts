import { Component, OnInit } from '@angular/core';

import { Clproducto } from '../modelo/clproducto';
import { SerproductoService } from '../servicios/serproducto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproducto',
  templateUrl: './listarproducto.component.html',
  styleUrls: ['./listarproducto.component.css']
})
export class ListarproductoComponent {
  title = 'LISTA DE PRODUCTOS';
 
 
  clproducto = null as any;
   
    constructor(
      private serproductoService: SerproductoService,
      private router: Router
    ) { }
 
    ngOnInit(): void {
      this.serproductoService.getAll().subscribe(
        result => this.clproducto = result);
    } 
          //ELIMINAR PERSONA
          delete(usuario: Clproducto): void {
            console.log("ELIMINACION DE PERSONA");
            this.serproductoService.delete(usuario.id_producto).subscribe(
              res => this.serproductoService.getAll().subscribe(
                response => this.clproducto = response
              )
            );
          }
} 
