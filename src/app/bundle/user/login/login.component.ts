import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';

import {SettingsService} from '../../../core/settings/settings.service';

import {UserService} from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valForm: FormGroup;
    @ViewChild('f', {static: false}) loginForm: NgForm;

    constructor(public settings: SettingsService, fb: FormBuilder, private router: Router,
                private userService: UserService,
                private vRef: ViewContainerRef) {
    }

    ngOnInit() {

    }

    submitForm() {
        const user = {};

        this.userService
            .login(user)
            .subscribe(
                session => console.log(session)
            );

    }

    onForgotPassword() {

    }

    onRegister() {

    }



}
