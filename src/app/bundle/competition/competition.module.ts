import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CountryService} from '../country/service/country.service';
import {TeamService} from '../team/service/team.service';
import {CompetitionMainComponent} from './competition-main/competition-main.component';
import {CompetitionMatchesComponent} from './competition-matches/competition-matches.component';
import {CompetitionHomeComponent} from './competition-home/competition-home.component';
import {CompetitionTableComponent} from './competition-table/competition-table.component';
import {CompetitionSettingsComponent} from './competition-settings/competition-settings.component';
import {CompetitionSeasonService} from './service/competition-season.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {CompetitionTeamComponent} from './competition-team/competition-team.component';

const routes: Routes = [
  {path: 'home', component: CompetitionHomeComponent},
  {path: 'table', component: CompetitionTableComponent},
  {path: 'matches', component: CompetitionMatchesComponent},
  {path: 'settings', component: CompetitionSettingsComponent},
  {path: 'close', component: CompetitionHomeComponent},
  {
    path: 'team',
    children: [
      {path: ':team_id', component: CompetitionTeamComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
  ],
  declarations: [
    CompetitionMainComponent,
    CompetitionHomeComponent,
    CompetitionMatchesComponent,
    CompetitionTableComponent,
    CompetitionTeamComponent,
    CompetitionSettingsComponent,
  ],
  providers: [
    CountryService,
    TeamService,
    CompetitionSeasonService,
  ],
  exports: [
    CommonModule,
    RouterModule,
  ]
})
export class CompetitionModule {
}
