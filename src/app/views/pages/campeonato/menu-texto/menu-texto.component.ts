import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-menu-texto',
  templateUrl: './menu-texto.component.html',
  styleUrls: ['./menu-texto.component.scss'],
})
export class MenuTextoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  criarCampeonato() {
    this.router.navigateByUrl('/campeonato/adicionar');
  }
}
