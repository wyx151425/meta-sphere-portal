import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../../@shared/shared.module";
import {HeatAnalysisComponent} from './heat-analysis/heat-analysis.component';
import {EmotionAnalysisComponent} from './emotion-analysis/emotion-analysis.component';
import {RegionalAnalysisComponent} from './regional-analysis/regional-analysis.component';
import {StaticAnalysisComponent} from "./static-analysis.component";
import {StaticAnalysisRoutingModule} from "./static-analysis-routing.module";

@NgModule({
  declarations: [
    StaticAnalysisComponent,
    HeatAnalysisComponent,
    EmotionAnalysisComponent,
    RegionalAnalysisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StaticAnalysisRoutingModule
  ]
})
export class StaticAnalysisModule {
}
