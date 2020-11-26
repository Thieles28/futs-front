import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { TimeComponent } from './time.component';
// MATERIAL
import {
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatTableModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	MatSortModule,
} from '@angular/material';


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
