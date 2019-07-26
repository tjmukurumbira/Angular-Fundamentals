import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';

import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/event.model';



@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
events: IEvent[];
 constructor(private route: ActivatedRoute , private eventService: EventService) {}

  ngOnInit() {
     this.events = this.route.snapshot.data['events'];
  }


}
