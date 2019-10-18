import { Component, OnInit, HostBinding } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ActivatedRoute, Router } from '@angular/router'

import { ClientesService } from '../../services/clientes.service'

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @HostBinding('class') classes ='row';

  cliente: Cliente = {
    clienteid: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: ''
  };
  
  edit: boolean = false;
  
  constructor(private clientesService: ClientesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.clienteid){
      this.clientesService.getCliente(params.clienteid).subscribe(
        res=>{
          console.log(res);
          this.cliente=res;
          this.edit = true;
        },
        err => console.error(err)
      )
    }
  }

  saveNewCliente(){
    this.clientesService.saveCliente(this.cliente).subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }

  updateCliente(){
    this.clientesService.updateCliente(this.cliente.clienteid,this.cliente)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }

}
