import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {ChartistModule} from 'ng-chartist';
import {MatchHeightModule} from '../../shared/directives/match-height.directive';
import {TableFullComponent} from './table-full/table-full.component';
import {TeamService} from '../team/service/team.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartistModule,
        MatchHeightModule,
        NgxDatatableModule,
    ],
    declarations: [
        TableFullComponent,
    ],
    providers: [
        TeamService,
    ],
    exports: [
        TableFullComponent
    ]
})
export class TableModule {
}
