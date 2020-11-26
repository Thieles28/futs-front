import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampeonatoComponent } from "./campeonato.component";
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import {
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSortModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    RouterModule.forChild([
      {
        path: "",
        component: CampeonatoComponent,
      },
    ]),
    // Material
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [CampeonatoComponent],
})
export class CampeonatoModule {}
