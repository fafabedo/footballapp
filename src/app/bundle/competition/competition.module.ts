import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CountryService} from '../country/service/country.service';
import {TeamService} from '../team/service/team.service';
import {CompetitionService} from './service/competition.service';
import {CompetitionMainComponent} from './competition-main/competition-main.component';
import {CompetitionMatchesComponent} from './competition-matches/competition-matches.component';
import {CompetitionHomeComponent} from './competition-home/competition-home.component';
import {CompetitionTableComponent} from './competition-table/competition-table.component';
import {TableModule} from '../table/table.module';
import {CompetitionSeasonService} from './service/competition-season.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

const routes: Routes = [
    {
        path: ':id',
        children: [
            {path: 'home', component: CompetitionHomeComponent},
            {path: 'table', component: CompetitionTableComponent},
            {path: 'matches', component: CompetitionMatchesComponent},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TableModule,
        RouterModule.forChild(routes),
        NgxDatatableModule,
    ],
    declarations: [
        CompetitionMainComponent,
        CompetitionHomeComponent,
        CompetitionMatchesComponent,
        CompetitionTableComponent,
    ],
    providers: [
        CountryService,
        TeamService,
        CompetitionService,
        CompetitionSeasonService,
    ],
    exports: [
        RouterModule,
    ]
})
export class CompetitionModule {
}
