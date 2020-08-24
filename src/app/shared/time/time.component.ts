import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeModel } from 'src/app/model/time-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  listaTimes: TimeModel[];
  colunasExibidas: string[] = ['codigoTime', 'nome'];
  dataSource = new MatTableDataSource<TimeModel>(this.listaTimes);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.retornarListaTimes();
    this.dataSource.paginator = this.paginator;
  }

  retornarListaTimes() {
    this.timeService.retornaListaTimes().subscribe((res: TimeModel[]) => {
      this.listaTimes = res;
    });
  }
}
