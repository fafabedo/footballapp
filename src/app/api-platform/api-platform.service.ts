import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

export const API_PLATFORM = {
    api_resource: environment.apiURL,
    version: environment.apiVersion,
    format: environment.format,
    doc: environment.apiDocURL,
    images: {
        base_url: 'files'
    }
};

@Injectable()
export class ApiPlatformService {
    constructor() {
    }

    getApiPlatformResource(resource: string): string {
        return API_PLATFORM.api_resource + '/' + API_PLATFORM.version + '/' + resource + '.' + API_PLATFORM.format;
    }

    getApiPlatformPathFiles(src: string): string {
        return API_PLATFORM.api_resource + '/' + API_PLATFORM.images.base_url + '/' + src;
    }
}
