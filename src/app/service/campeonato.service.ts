import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CampeonatoService {
	apiUrl = environment.url;

	constructor(private http: HttpClient) {}

	listarCampeonato() {
		return this.http.get(`${this.apiUrl}/campeonatos`);
	}
}
