import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  static readonly API_SPACEX_URL = 'https://api.spacexdata.com';

  constructor(private http: HttpClient) { }
  
  findAllSpaceXData(): Observable<any[]> {
    return this.http.get<any[]>(`${SpacexService.API_SPACEX_URL}/v3/launches?limit=100`);
  }
}
