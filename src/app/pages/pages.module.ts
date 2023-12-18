import {PagesComponent} from "./pages.component";
import {CommonModule} from "@angular/common";
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../@shared/shared.module";
import {NgModule} from "@angular/core";
import { DeductionComponent } from './dynamic-analysis/deduction/deduction.component';

@NgModule({
  declarations: [
    PagesComponent,
    DeductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
