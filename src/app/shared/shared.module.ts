import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {FlotDirective} from './directives/flot/flot.directive';
import {SparklineDirective} from './directives/sparkline/sparkline.directive';
import {EasypiechartDirective} from './directives/easypiechart/easypiechart.directive';
import {ColorsService} from './colors/colors.service';
import {CheckallDirective} from './directives/checkall/checkall.directive';
import {VectormapDirective} from './directives/vectormap/vectormap.directive';
import {NowDirective} from './directives/now/now.directive';
import {ScrollableDirective} from './directives/scrollable/scrollable.directive';
import {JqcloudDirective} from './directives/jqcloud/jqcloud.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToggleFullscreenDirective} from './directives/toggle-fullscreen.directive';
import {ChunkPipe} from './pipes/chunk/chunk.pipe';
import {ImageSrcPipe} from './pipes/imagesrc/imagesrc.pipe';
import {MaterialModule} from './material/material.module';
import {FafaContainerModule} from './components/fafa-container/fafa-container.module';


const PIPES = [
  FlotDirective,
  SparklineDirective,
  EasypiechartDirective,
  CheckallDirective,
  VectormapDirective,
  NowDirective,
  ScrollableDirective,
  JqcloudDirective,
  ToggleFullscreenDirective,
  ChunkPipe,
  ImageSrcPipe,
];

const COMPONENTS = [
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    FafaContainerModule,
    MaterialModule,
  ],
  providers: [
    ColorsService
  ],
  declarations: [
    PIPES,
    ...COMPONENTS,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    NgbModule,
    MaterialModule,
    FafaContainerModule,
    ...PIPES,
    ...COMPONENTS,
  ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
