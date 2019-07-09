import {Component, Input, OnInit} from '@angular/core';
import {Country} from '@app/api-platform/interfaces/country';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private apiPlatform: ApiPlatformService) { }

  ngOnInit() {
  }

  navigate(country: Country) {
    this.router.navigate(['/country', country.id]);
  }

  sanitizeImage(src: string) {
    const source = this.apiPlatform.getApiPlatformPathFiles(src);
    return this.sanitizer.bypassSecurityTrustResourceUrl(source);
  }
}
