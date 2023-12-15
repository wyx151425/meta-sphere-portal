import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IconsProviderModule} from "../icons-provider.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    IconsProviderModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
