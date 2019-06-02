import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { SharedModule } from '../../shared/shared.module';
import {UserService} from './service/user.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
    ],
    exports: [

    ],
    providers: [
        UserService
    ]
})
export class UserSessionModule { }
