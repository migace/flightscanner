import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IFlightQuery } from '../types';

@Injectable({
  providedIn: 'root'
})
export class KiwiAPIService {
  API_URL: string = "https://api.skypicker.com";

  constructor(
    private http: HttpClient,
  ) { }

  getFlights(data: IFlightQuery) {
    return this.http.get(
      `${this.API_URL}/flights?${this.prepareParams(data)}`
    );
  }

  private prepareParams(params: IFlightQuery): string {
    return Object.keys(params).reduce((acc, curr) => 
      params[curr] ? acc += `${curr}=${params[curr]}&` : acc, ''
    ).slice(0, -1);
  }
}
