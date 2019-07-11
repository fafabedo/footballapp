import {Component, Input, OnInit} from '@angular/core';
import {FederationService} from '../service/federation.service';
import {Federation} from '@app/api-platform/interfaces/federation';

@Component({
    selector: 'app-wdg-federation',
    templateUrl: './federation-widget.component.html',
    styleUrls: ['./federation-widget.component.scss'],
})

export class FederationWidgetComponent implements OnInit {
    federations: Array<Federation> = [];
    chunkedArr: Array<Array<Federation>> = [];
    attributes = 'cols-sm-6';
    @Input() size = 4;

    constructor(private federationService: FederationService) {
    }

    ngOnInit() {
        this.federationService
            .getFederations()
            .subscribe(federations => this.prepareFederations(federations));
    }

    prepareFederations(federations: Federation[]): void {
        this.chunkedArr = this.chunk(federations);
        const bootsCal = (12 / this.size);
        this.attributes = 'col-sm-' + bootsCal.toString();
    }

    navigateFederation(federation: Federation) {
        console.log(federation);
    }

    chunk(array: Federation[]) {
        const chunkedArr = [];
        const copied = [...array];
        const numOfChild = Math.ceil(copied.length / this.size); // Round up to the nearest integer
        for (let i = 0; i < numOfChild; i++) {
            chunkedArr.push(copied.splice(0, this.size));
        }
        return chunkedArr;
    }
}
