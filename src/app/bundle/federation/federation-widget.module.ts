import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartistModule} from 'ng-chartist';

import {SharedModule} from '../../shared/shared.module';
import {MatchHeightModule} from '../../shared/directives/match-height.directive';
import {FederationWidgetComponent} from './federation-widget/federation-widget.component';
import {FederationService} from './service/federation.service';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ChartistModule,
        MatchHeightModule,
    ],
    declarations: [
        FederationWidgetComponent,
    ],
    exports: [
        FederationWidgetComponent
    ],
    providers: [
        FederationService
    ]
})
export class FederationWidgetModule { }
