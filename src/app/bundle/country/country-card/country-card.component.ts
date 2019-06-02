import {Component, Input, OnInit} from '@angular/core';
import {Country} from '@app/api-platform/interfaces/country';
import {Router} from '@angular/router';

@Component({
    selector: 'app-country-card',
    templateUrl: './country-card.component.html',
    styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
    @Input() country: Country;
    constructor(private router: Router) {}

    ngOnInit() {
    }

    navigate(country: Country) {
        this.router.navigate(['/country', country.id]);
    }
}
