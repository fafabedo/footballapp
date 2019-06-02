import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SettingsService } from '../../../core/settings/settings.service';

import {UserService} from '../service/user.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logut.component.html',
})
export class LogoutComponent implements OnInit {


    constructor(public settings: SettingsService, private router: Router,
                private userService: UserService) {

    }

    ngOnInit() {
        this.router.navigate(['/login']);

    }

}
