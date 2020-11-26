import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TimeService } from '../../../service/time.service';
import { TimeModel } from '../../../model/timeModel';
@Component({
	selector: 'kt-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements AfterViewInit {

	displayedColumns: string[] = ['codigoTime', 'nome'];
	dataSource: MatTableDataSource<TimeModel>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  	@ViewChild(MatSort, {static: true}) sort: MatSort;

	constructor(private timeService: TimeService) { }

	ngAfterViewInit() {
		this.listaDeTime();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	listaDeTime() {
		this.timeService.listarTime().subscribe((time: TimeModel[]) => {
			this.dataSource = new MatTableDataSource(time);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
