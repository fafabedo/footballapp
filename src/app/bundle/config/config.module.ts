import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {TableModule} from '../table/table.module';
import {RouterModule, Routes} from '@angular/router';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ConfigDashboardComponent} from './dashboard/config-dashboard.component';
import {ConfigService} from './service/config.service';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {AceEditorModule} from 'ng2-ace-editor';

const routes: Routes = [
  {path: '', component: ConfigDashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    NgxJsonViewerModule,
    AceEditorModule,
  ],
  declarations: [
    ConfigDashboardComponent
  ],
  providers: [
    ConfigService
  ],
  exports: [
    RouterModule,
  ]
})
export class ConfigModule {
}
