import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../service/country.service';
import {Country} from '@app/api-platform/interfaces/country';
import {Federation} from '@app/api-platform/interfaces/federation';
import {BreadcrumbItem} from '../../../shared/components/fafa-breadcrumb/breadcrumbitem';

@Component({
  selector: 'app-country-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countries: Array<Country> = [];
  federations: Array<Federation> = [];
  breadcrumb: Array<BreadcrumbItem> = [
    {
      title: 'Home',
      path: ['/home']
    },
    {
      title: 'Countries',
      active: true
    }
  ];

  constructor(private router: Router,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountries(true)
      .subscribe(countries => this.prepareCountries(countries));
  }

  prepareCountries(countries: Country[]) {
    countries.forEach(country => {
      if (country.federation) {
        const exists = this.federations.find(federation => country.federation.id === federation.id);
        if (!exists) {
          this.federations = [...this.federations, ...[country.federation]];
        }
      } else {
        console.log(country);
      }
    });
    this.countries = countries.filter(country => country.active === true);
  }

  filterCountries(f: Federation): Array<Country> {
    return this.countries.filter(country => (country.federation && country.federation.id === f.id));
  }


}

