import {Pipe, PipeTransform} from '@angular/core';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';

@Pipe({name: 'imageSrc'})
export class ImageSrcPipe implements PipeTransform {
    constructor(private apiPlatformService: ApiPlatformService) {}
    transform(value: any): string {
        return this.apiPlatformService.getApiPlatformPathFiles(value);
    }
}
