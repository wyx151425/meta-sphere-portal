import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StaticAnalysisComponent} from "./static-analysis.component";
import {EmotionAnalysisComponent} from "./emotion-analysis/emotion-analysis.component";
import {RegionalAnalysisComponent} from "./regional-analysis/regional-analysis.component";
import {HeatAnalysisComponent} from "./heat-analysis/heat-analysis.component";

const routes: Routes = [
  {
    path: '',
    component: StaticAnalysisComponent,
    children: [
      {
        path: 'emotionAnalysis',
        component: EmotionAnalysisComponent
      },
      {
        path: 'regionalAnalysis',
        component: RegionalAnalysisComponent
      },
      {
        path: 'heatAnalysis',
        component: HeatAnalysisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticAnalysisRoutingModule {
}
