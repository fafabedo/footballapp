import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatPaginatorModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSortModule,
  MatTableModule, MatTabsModule, MatToolbarModule
} from '@angular/material';

const MODULES = [
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatTabsModule,
  MatSortModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule,
];
@NgModule({
  imports: [
    MODULES
  ],
  providers: [],
  declarations: [],
  exports: [
    MODULES
  ]
})
export class MaterialModule {

}
