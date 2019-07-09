import {LayoutComponent} from '../layout/layout.component';

import {LoginComponent} from '../bundle/user/login/login.component';
import {LogoutComponent} from '../bundle/user/logout/logout.component';
import {Error404Component} from '../bundle/system/error404/error404.component';

export const routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', loadChildren: './../bundle/home/home.module#HomeModule'},
            {path: 'countries', loadChildren: './../bundle/country/country.module#CountryModule'},
            {path: 'competition', loadChildren: './../bundle/competition/competition.module#CompetitionModule'},
            {path: 'config', loadChildren: './../bundle/config/config.module#ConfigModule'}
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: '404', component: Error404Component},

    // Not found
    {path: '**', redirectTo: '404'}

];

