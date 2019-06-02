import {Injectable} from '@angular/core';

export const API_PLATFORM = {
    api_resource: 'http://apifootball.local',
    version: 'v1',
    format: 'json',
    doc: 'http://apifootball.local/v1/',
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
