import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverComponent } from './recover/recover.component';
import { LockComponent } from './lock/lock.component';
import {LogoutComponent} from './logout/logout.component';
import {UserService} from './service/user.service';

/* Use this routes definition in case you want to make them lazy-loaded */
const routes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'logout', component: LogoutComponent },
    // { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        RecoverComponent,
        LockComponent,
    ],
    exports: [
        RouterModule,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        RecoverComponent,
        LockComponent,
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
