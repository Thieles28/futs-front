import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { TimeComponent } from './time.component';
// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		PartialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: TimeComponent,
			},
		]),
		// Material
		MatTableModule,
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule
	],
	declarations: [TimeComponent],
})
export class TimeModule {}
