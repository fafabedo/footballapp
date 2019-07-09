import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FafaContainerHeaderComponent} from './fafa-container-header/fafa-container-header.component';
import {FafaContainerContentComponent} from './fafa-container-content/fafa-container-content.component';
import {FafaContainerComponent} from './fafa-container.component';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [
    FafaContainerHeaderComponent,
    FafaContainerContentComponent,
    FafaContainerComponent
  ],
  exports: [
    FafaContainerHeaderComponent,
    FafaContainerContentComponent,
    FafaContainerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class FafaContainerModule {
}
