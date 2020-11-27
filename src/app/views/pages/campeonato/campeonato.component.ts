import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { CampeonatoModel } from "../../../model/campeonatoModel";
import { CampeonatoService } from "../../../service/campeonato.service";
import { Router } from "@angular/router";

@Component({
  selector: "kt-campeonato",
  templateUrl: "./campeonato.component.html",
  styleUrls: ["./campeonato.component.scss"],
})
export class CampeonatoComponent implements AfterViewInit {
  displayedColumns: string[] = ["codigoCampeonato", "nome"];
  dataSource: MatTableDataSource<CampeonatoModel>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private campeonatoService: CampeonatoService,
    private router: Router
  ) {}

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
    this.campeonatoService
      .listarCampeonato()
      .subscribe((campeonato: CampeonatoModel[]) => {
        this.dataSource = new MatTableDataSource(campeonato);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
}
