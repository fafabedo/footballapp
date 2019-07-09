import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FafaBreadcrumbComponent} from './fafa-breadcrumb-component/fafa-breadcrumb.component';
import {MatChipsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule,
  ],
  declarations: [
    FafaBreadcrumbComponent
  ],
  exports: [
    FafaBreadcrumbComponent
  ]
})
export class FafaBreadcrumbModule {}
