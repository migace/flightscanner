import { Component } from '@angular/core';

import { KiwiapiService } from './kiwiapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skyscanner';

  constructor(
    private kiwiapiService: KiwiapiService,
  ) {

  }

  ngOnInit() {
    console.log(this.kiwiapiService);
    this.kiwiapiService.getFlights();
  }
}
