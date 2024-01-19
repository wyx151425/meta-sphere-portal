import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'staticAnalysis',
        loadChildren: () =>
          import('./static-analysis/static-analysis.module').then((m) => m.StaticAnalysisModule)
      },
      {
        path: 'dynamicAnalysis',
        loadChildren: () =>
          import('./dynamic-analysis/dynamic-analysis.module').then((m) => m.DynamicAnalysisModule)
      },
      {
        path: '',
        redirectTo: 'staticAnalysis',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
