import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {CountryListComponent} from './country-list/country-list.component';
import {CountryPageComponent} from './country-page/country-page.component';
import {CountryService} from './service/country.service';
import {CountryWidgetModule} from './country-widget.module';
import {AgmCoreModule} from '@agm/core';
import {TeamService} from '../team/service/team.service';
import {CompetitionService} from '../competition/service/competition.service';

const routes: Routes = [
    { path: '', component: CountryListComponent },
    { path: ':id', component: CountryPageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CountryWidgetModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBcIv5FGxyLL5kb_K0f4i1FsAz2EqK4KmU'
        })
    ],
    declarations: [
        CountryListComponent,
        CountryPageComponent,
    ],
    providers: [
        CountryService,
        TeamService,
        CompetitionService,
    ],
    exports: [
        RouterModule
    ]
})
export class CountryModule {
}
