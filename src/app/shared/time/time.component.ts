import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeModel } from 'src/app/model/time-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TimeService } from 'src/app/services/time.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  colunasExibidas: string[] = ['codigoTime', 'nome'];
  dataSource: MatTableDataSource<TimeModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.retornarListaTimes();
  }

  retornarListaTimes() {
    this.timeService.retornaListaTimes().subscribe((res: TimeModel[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
