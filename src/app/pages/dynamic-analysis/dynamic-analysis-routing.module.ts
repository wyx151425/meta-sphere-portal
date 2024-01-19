import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DynamicAnalysisComponent} from "./dynamic-analysis.component";
import {CommonDeductionComponent} from "./common-deduction/common-deduction.component";
import {IntervenedDeductionComponent} from "./intervened-deduction/intervened-deduction.component";
import {InteractiveDeductionComponent} from "./interactive-deduction/interactive-deduction.component";

const routes: Routes = [
  {
    path: '',
    component: DynamicAnalysisComponent,
    children: [
      {
        path: 'commonDeduction',
        component: CommonDeductionComponent
      },
      {
        path: 'intervenedDeduction',
        component: IntervenedDeductionComponent
      },
      {
        path: 'interactiveDeduction',
        component: InteractiveDeductionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicAnalysisRoutingModule {
}
