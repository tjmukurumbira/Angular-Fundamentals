import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event = {
    name: 'ngConf 2025',
    date: '3/1/2025',
    time: '8am',
    price: 200,
    location: {
      address: '123 Main St',
      city: 'Salt Lake City, UT',
      country: 'USA'}
    };
  constructor() { }

  ngOnInit() {
  }

  handleEventClicked(data) {

  }

}
