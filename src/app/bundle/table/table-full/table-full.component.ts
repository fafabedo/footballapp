import {Component, Input, OnInit} from '@angular/core';
import {CompetitionSeasonTableItem} from '@app/api-platform/interfaces/competitionseasontableitem';

@Component({
    selector: 'app-widget-full-table',
    templateUrl: 'table-full.component.html',
    styleUrls: ['table-full.component.scss']
})
export class TableFullComponent implements OnInit {
    @Input() tableItems: Array<CompetitionSeasonTableItem> = [];
    constructor() {}

    ngOnInit() {
    }
}
