import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TimesModel } from '../model/times-model';

@Injectable({
  providedIn: 'root',
})
export class ClassificacaoService {
  private url = environment.servidor;

  constructor(private http: HttpClient) {}

  retornaListaTimes() {
    return this.http.get(`${this.url}/times`);
  }

  cadastrarTimes(times: TimesModel) {
    return this.http.post(`${this.url}/times`, times);
  }

  atualizarTimes(times: TimesModel) {
    return this.http.put(`${this.url}/times/${times.codigo}`, times);
  }

  removerTimes(codigo: number) {
    return this.http.delete(`${this.url}/times/${codigo}`);
  }
}
