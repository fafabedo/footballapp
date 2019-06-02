import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CountryService} from './service/country.service';
import {CountryCardComponent} from './country-card/country-card.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        CountryCardComponent
    ],
    providers: [
        CountryService
    ],
    exports: [
        CountryCardComponent
    ]
})
export class CountryWidgetModule {
}
