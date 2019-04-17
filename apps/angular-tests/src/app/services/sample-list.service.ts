import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SampleListModel } from '../models/sample-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleListService {

  constructor(private http: HttpClient) { }

  getSampleList(): Observable<SampleListModel[]> {
    return this.http.get<SampleListModel[]>("https://my-json-server.typicode.com/karql/angular-tests/list");
  }
}
