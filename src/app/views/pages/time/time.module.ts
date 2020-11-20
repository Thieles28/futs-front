import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeComponent } from "./time.component";
import { PartialsModule } from "../../partials/partials.module";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../../../core/core.module";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: "",
				component: TimeComponent,
			},
		]),
	],
	declarations: [TimeComponent],
})
export class TimeModule {}
