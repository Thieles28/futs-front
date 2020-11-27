import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampeonatoComponent } from './campeonato.component';
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CampeonatoEditarComponent } from './campeonato-editar/campeonato-editar.component';
import { MenuTextoComponent } from './menu-texto/menu-texto.component';
import {
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ModuleGuard } from '../../../../app/core/auth/_guards/module.guard';

const routes: Routes = [
  {
    path: '',
    component: CampeonatoComponent,
    canActivate: [ModuleGuard],
    data: { moduleName: 'campeonato' },
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: 'adicionar',
        component: CampeonatoEditarComponent,
      },
      {
        path: 'editar',
        component: CampeonatoEditarComponent,
      },
      {
        path: 'editar/:id',
        component: CampeonatoEditarComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    PartialsModule,
    RouterModule.forChild([
      {
        path: '',
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
    // NgBootstrap
    NgbDropdownModule,
    NgbTooltipModule,
  ],
  declarations: [CampeonatoComponent, MenuTextoComponent],
  exports: [MenuTextoComponent],
})
export class CampeonatoModule {}
