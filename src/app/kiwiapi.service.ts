import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KiwiapiService {
  API_URL: string = "https://api.skypicker.com";

  constructor(
    private http: HttpClient,
  ) { }

  getFlights() {
    const response = this.http.get(
      `${this.API_URL}/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2019&dateTo=12/12/2019&partner=picky`
    );  

    response.subscribe(data => console.log('data', data));
  }
}
