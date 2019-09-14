import 'hammerjs';
import { Component } from '@angular/core';

import { KiwiAPIService } from '../services/kiwiAPI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyscanner';

  constructor(
    private kiwiAPIService: KiwiAPIService,
  ) {

  }

  ngOnInit() {
    this.kiwiAPIService.getFlights({
      fly_from: 'PRG',
      to: 'LGW',
      date_from: '18/11/2019',
      date_to: '12/12/2019',
      partner: 'picky',
      v: 3
    });
  }
}
