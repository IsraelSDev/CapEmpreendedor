import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class GetDataService {
    base: String = 'https://random-data-api.com/api/v2/';

    constructor(private http: HttpClient) {
    }

    getData(): Observable<any> {
        const url = this.base + 'users?size=9'
        return this.http.get(url);
    }

    getDataById(id: number): Observable<any> {
        const url = this.base + 'users/' + id;
        return this.http.get(url);
    }
}
