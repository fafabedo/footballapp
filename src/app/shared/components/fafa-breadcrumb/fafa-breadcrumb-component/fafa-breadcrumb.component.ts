import {Component, Input} from '@angular/core';
import {BreadcrumbItem} from '../breadcrumbitem';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fafa-breadcrumb',
  templateUrl: 'fafa-breadcrumb.component.html',
  styleUrls: ['fafa-breadcrumb.component.scss']
})
export class FafaBreadcrumbComponent {
  @Input() items: Array<BreadcrumbItem> = [];
  constructor() {}
}


