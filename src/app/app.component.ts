import 'hammerjs';
import { Component } from '@angular/core';

import * as moment from 'moment';

import { KiwiAPIService } from '../services/kiwiAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkyScanner';

  constructor(
    private kiwiAPIService: KiwiAPIService,
  ) {

  }

  ngOnInit() {
  }

  search(form) {
    this.kiwiAPIService.getFlights({
      fly_from: form.from,
      to: form.to,
      date_from: moment(form.departure).format('DD/MM/YYYY'),
      date_to: moment(form.return).format('DD/MM/YYYY'),
      partner: 'picky',
      v: 3
    }).subscribe(data => console.log('datamodel', data));
  } 
}
