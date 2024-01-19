import {PagesComponent} from "./pages.component";
import {CommonModule} from "@angular/common";
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../@shared/shared.module";
import {NgModule} from "@angular/core";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzSliderModule} from "ng-zorro-antd/slider";

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzIconModule
  ]
})
export class PagesModule {
}
