// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CoreModule } from '../../../../core/core.module';
import { PartialsModule } from '../../../partials/partials.module';
import { BuilderComponent } from './builder.component';

// NgBootstrap
// Perfect Scrollbar
// Partials
// Highlight JS
// CoreModule
// Builder component
@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    FormsModule,
    MatTabsModule,
    CoreModule,
    PerfectScrollbarModule,
    HighlightModule,
    RouterModule.forChild([
      {
        path: '',
        component: BuilderComponent,
      },
    ]),

    // ng-bootstrap modules
    NgbTabsetModule,
  ],
  providers: [],
  declarations: [BuilderComponent],
})
export class BuilderModule {}
