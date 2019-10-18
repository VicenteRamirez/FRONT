import { Component, OnInit, HostBinding } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  @HostBinding('class') classes ='row'

  clientes : any = [];
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe(
      res => {
        this.clientes = res;
      },
      err => console.error(err)
    );
  }

  deleteCliente(clienteid:string){
    this.clientesService.deleteCliente(clienteid).subscribe(
      res=>{
        console.log(res);
        this.getClientes();
      },
      err => console.log(err)
    )
  }

}
