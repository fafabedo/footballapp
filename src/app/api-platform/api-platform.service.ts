import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiPlatformService {
    constructor() {
    }

    getApiPlatformResource(resource: string): string {
        return environment.api.url + '/' + environment.api.version + '/' + resource + '.' + environment.api.format;
    }
}
