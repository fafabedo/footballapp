import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Pipe({name: 'imageSrc'})
export class ImageSrcPipe implements PipeTransform {
    constructor() {}
    transform(value: any): string {
      return environment.files.prefix + value + environment.files.suffix;
    }
}
