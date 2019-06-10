import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule, MatInputModule, MatListModule,
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
  MatChipsModule,
  MatDividerModule,
  MatListModule,
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
