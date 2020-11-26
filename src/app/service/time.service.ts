import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class TimeService {

	apiUrl = environment.url;

	constructor(private http: HttpClient) {}

	listarTime() {
		return this.http.get(`${this.apiUrl}/times`);
	}
}
