import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CampeonatoModel } from '../../../model/campeonatoModel';
import { CampeonatoService } from '../../../service/campeonato.service';

@Component({
  selector: 'kt-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.scss']
})
export class CampeonatoComponent implements AfterViewInit {

	displayedColumns: string[] = ['codigoCampeonato', 'nome'];
	dataSource: MatTableDataSource<CampeonatoModel>;

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  	@ViewChild(MatSort, {static: true}) sort: MatSort;

	constructor(private campeonatoService: CampeonatoService) { }

	ngAfterViewInit() {
		this.listaDeCampeonato();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	listaDeCampeonato() {
		this.campeonatoService.listarCampeonato().subscribe((campeonato: CampeonatoModel[]) => {
			this.dataSource = new MatTableDataSource(campeonato);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

}
