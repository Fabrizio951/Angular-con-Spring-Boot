import { Component, OnInit } from '@angular/core';
import { SercategoriaService } from '../servicios/sercategoria.service';
import { Clcategoria } from '../modelo/clcategoria';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nuevocategoria',
  templateUrl: './nuevocategoria.component.html',
  styleUrls: ['./nuevocategoria.component.css']
})
export class NuevocategoriaComponent implements OnInit{
  titulo ="NUEVA CATEGORIA";
  clausu: Clcategoria = new Clcategoria();
  constructor(
    private sercategoriaservice: SercategoriaService,
    private router: Router,
    private activatedrouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargar();
  }

  // CARGAR PERSONA
  cargar(): void {
    this.activatedrouter.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.sercategoriaservice.get(id).subscribe(
            es => this.clausu = es
          );
        }
      }
    )
  }
  // NUEVA PERSONA
  create(): void {
    console.log("CREACION DE USUARIO");
    console.log(this.clausu);
    this.sercategoriaservice.create(this.clausu).subscribe(
      res => this.router.navigate(['/listar'])
    );
  }
}
