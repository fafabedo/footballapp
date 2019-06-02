import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule} from '@angular/material';

const MODULES = [
  BrowserAnimationsModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
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
