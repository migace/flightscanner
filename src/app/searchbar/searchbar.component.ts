import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() handleForm = new EventEmitter<any>();
  searchForm = new FormGroup({
    from: new FormControl('PRG'),
    to: new FormControl('LGW'),
    departure: new FormControl(moment().format('YYYY-MM-DD')),
    return: new FormControl(moment().add(7, 'd').format('YYYY-MM-DD'))
  });

  constructor() { }

  ngOnInit() {
  }

  handleOnSubmit() {
    this.handleForm.emit(this.searchForm.value);
  }
}
