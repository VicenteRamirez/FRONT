import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Cliente} from '../models/cliente'

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = 'http://localhost:3002/clientes';

  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get(`${this.API_URI}`);
  }

  getCliente(clienteid: string){
    return this.http.get(`${this.API_URI}/${clienteid}`);
  }

  saveCliente(cliente: Cliente){
    return this.http.post(`${this.API_URI}`,cliente);
  }

  deleteCliente(clienteid: string){
    return this.http.delete(`${this.API_URI}/${clienteid}`);
  }

  updateCliente(clienteid: string|number, updatedCliente:Cliente){
    return this.http.put(`${this.API_URI}/${clienteid}`,updatedCliente );
  }
}
