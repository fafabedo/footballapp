import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;

    constructor(public settings: SettingsService, fb: FormBuilder) {
    }

    submitForm($ev, value: any) {
        $ev.preventDefault();
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    }

    ngOnInit() {
    }

}
