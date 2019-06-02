import { Directive, HostListener } from '@angular/core';

import * as screen from 'screenfull';

@Directive({
  selector: '[appToggleFullscreen]'
})
export class ToggleFullscreenDirective {

  @HostListener('click') onClick() {
    if (screen.enabled) {
      screen.toggle();
    }
  }
}
