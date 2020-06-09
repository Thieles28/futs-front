import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ClassificacaoService } from '../../services/classificacao.service';
import { TimesModel } from '../../model/times-model';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css'],
})
export class ClassificacaoComponent implements OnInit {
  listaTimes: TimesModel[];
  dataSource = new MatTableDataSource<TimesModel>(this.listaTimes);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  colunasExibidas: string[] = [
    'codigo',
    'nome',
    'pontos',
    'jogos',
    'vitorias',
    'empate',
    'derrotas',
    'golsPro',
    'golsContra',
    'saldoGols',
    'cartaoAmarelo',
    'cartaoVermelho',
    'aproveitamento',
    'ultimosJogos',
    'status',
  ];

  constructor(private classificacaoService: ClassificacaoService) {}

  ngOnInit() {
    this.retornarListaTimes();
    this.dataSource.paginator = this.paginator;
  }

  retornarListaTimes() {
    this.classificacaoService
      .retornaListaTimes()
      .subscribe((res: TimesModel[]) => {
        this.listaTimes = res;
      });
  }
}
