import {ModuleWithProviders, NgModule} from "@angular/core";
import {DeductionService} from "./services/deduction.service";

export const MS_PORTAL_CORE_PROVIDERS = [
  DeductionService
];

@NgModule({
  declarations: [],
  imports: [],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...MS_PORTAL_CORE_PROVIDERS],
    };
  }
}
