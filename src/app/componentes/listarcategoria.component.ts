import { Component, OnInit  } from '@angular/core';
import { SercategoriaService } from '../servicios/sercategoria.service';
import { Clcategoria } from '../modelo/clcategoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarcategoria',
  templateUrl: './listarcategoria.component.html',
  styleUrls: ['./listarcategoria.component.css']
})
export class ListarcategoriaComponent {
  title = 'LISTA DE CATEGORIA';
 
  clcategoria = null as any;
   
    constructor(
      private sercategoriaservice: SercategoriaService,
      private router: Router
    ) { }

    ngOnInit(): void {
      this.sercategoriaservice.getAll().subscribe(
        result => this.clcategoria = result);
    }

        //ELIMINAR PERSONA
    delete(usuario: Clcategoria): void {
      console.log("ELIMINACION DE PERSONA");
      this.sercategoriaservice.delete(usuario.id_categorias).subscribe(
        res => this.sercategoriaservice.getAll().subscribe(
          response => this.clcategoria = response
        )
      );
    }
}
