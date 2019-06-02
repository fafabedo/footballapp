import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/of";
import {Article} from "../model/article.model";


@Injectable()
export class ArticleService {

    constructor(private http: HttpClient) {
    }

    getList(): Observable<Article[]> {
        let url = '/rest/api/v1/articles?_format=hal_json';

        return this.http.get<Article[]>(url)
            .catch(err => this.handleError(err));
    }

    get(id: number): Observable<Article> {
        let url = '/rest/api/v1/articles/' + id + '?_format=hal_json';

        return this.http.get<Article>(url)
            .catch(err => this.handleError(err));
    }

    handleError(error: any) {
        console.error(error);
        return Observable.of(error.message || error);
    }


}