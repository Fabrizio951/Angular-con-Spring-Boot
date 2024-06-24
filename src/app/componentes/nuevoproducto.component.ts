import { Component,OnInit } from '@angular/core';
import { Clproducto } from '../modelo/clproducto';
import { SerproductoService } from '../servicios/serproducto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.css']
})
export class NuevoproductoComponent implements OnInit{
  titulo ="NUEVO PRODUCTO";
  clausu: Clproducto = new Clproducto();
  constructor(
    private serusuarioservice: SerproductoService,
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
          this.serusuarioservice.get(id).subscribe(
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
    this.serusuarioservice.create(this.clausu).subscribe(
      res => this.router.navigate(['/listar'])
    );
  }


}
