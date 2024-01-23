import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../@shared/shared.module";
import {CommonDeductionComponent} from "./common-deduction/common-deduction.component";
import {InteractiveDeductionComponent} from "./interactive-deduction/interactive-deduction.component";
import {IntervenedDeductionComponent} from "./intervened-deduction/intervened-deduction.component";
import {DynamicAnalysisRoutingModule} from "./dynamic-analysis-routing.module";
import {DynamicAnalysisComponent} from "./dynamic-analysis.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DynamicAnalysisComponent,
    CommonDeductionComponent,
    IntervenedDeductionComponent,
    InteractiveDeductionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DynamicAnalysisRoutingModule,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NgxEchartsDirective
  ]
})
export class DynamicAnalysisModule {
}
