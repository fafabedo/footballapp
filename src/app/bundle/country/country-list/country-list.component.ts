import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../service/country.service';
import {Country} from '@app/api-platform/interfaces/country';
import {Federation} from '@app/api-platform/interfaces/federation';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
    countries: Array<Country> = [];
    others: Array<Country> = [];
    table: Array<any> = [];
    federations: Array<Federation> = [];
    constructor(private router: Router,
                private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries(true)
            .subscribe(countries => this.prepareCountries(countries));
    }

    prepareCountries(countries: Country[]) {
        countries.forEach(country => {
            if (country.federation) {
                const exists = this.federations.find(federation => country.federation.id === federation.id);
                if (!exists) {
                    this.federations.push(country.federation);
                }
            }
        });
        this.federations.forEach(federation => {
            const array = countries.filter(country => {
                return (country.federation && country.federation.id === federation.id);
            });
            this.table.push({
                federation: federation.shortname,
                countries: array
            });
        });
        console.log(this.table);
        this.countries = countries.filter(country => country.active === true);
        this.others = countries.filter(country => country.active === false);
    }


}

