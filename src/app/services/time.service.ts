import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TimeModel } from '../model/time-model';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private url = environment.servidor;

  constructor(private http: HttpClient) {}

  retornaListaTimes() {
    return this.http.get(`${this.url}/times`);
  }

  cadastrarTimes(times: TimeModel) {
    return this.http.post(`${this.url}/times`, times);
  }

  atualizarTimes(times: TimeModel) {
    return this.http.put(`${this.url}/times/${times.codigoTime}`, times);
  }

  removerTimes(codigo: number) {
    return this.http.delete(`${this.url}/times/${codigo}`);
  }
}
