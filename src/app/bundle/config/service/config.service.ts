import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiPlatformService} from '@app/api-platform/api-platform.service';
import {Config} from '@app/api-platform/interfaces/config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient,
              private apiPlatform: ApiPlatformService) {
  }

  getConfigs(): Observable<Config[]> {
    const url = this.apiPlatform.getApiPlatformResource('configs');
    const params = {pagination: 'false', 'order[name]': 'ASC'};
    return this.http.get<Config[]>(url, {params: params})
      .catch(err => this.handleError(err));
  }

  put(config: Config): Observable<Config> {
    const url = this.apiPlatform.getApiPlatformResource('configs/' + config.id);
    return this.http.put<Config>(url, config)
      .catch(err => this.handleError(err));
  }

  post(config: Config): Observable<Config> {
    console.log(config);
    config.id = null;
    const url = this.apiPlatform.getApiPlatformResource('configs');
    return this.http.post<Config[]>(url, config)
      .catch(err => this.handleError(err));
  }

  delete(config: Config) {
    const url = this.apiPlatform.getApiPlatformResource('configs/' + config.id);
    return this.http.delete<any>(url)
      .catch(err => this.handleError(err));
  }

  handleError(error: any) {
    console.error(error);
    return Observable.of(error.message || error);
  }
}
