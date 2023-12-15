import {ModuleWithProviders, NgModule} from "@angular/core";
import {PublicOpinionAnalysisService} from "./services/public-opinion-analysis.service";

export const MS_PORTAL_CORE_PROVIDERS = [
  PublicOpinionAnalysisService
];

@NgModule({
  declarations: [],
  imports: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...MS_PORTAL_CORE_PROVIDERS],
    };
  }
}
