import { Component, OnInit, OnChanges } from '@angular/core';
import { EventService } from 'src/app/shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnChanges {

 event: IEvent;
 addMode: boolean;
 filterBy: string = 'all';
 sortBy: string = 'name';
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit() {

    this.route.params.forEach((params: Params)=>{
       this.eventService.getEvent(+params['id']).subscribe((event: IEvent)=>{
         this.event= this.route.snapshot.data['event'];
         this.addMode= false;
       })
    })


  }
  ngOnChanges(): void {

  }

  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession){
     const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
     session.id = nextId + 1;
     this.event.sessions.push(session);
     this.eventService.saveEvent(this.event).subscribe(()=>{
      this.addMode = false;
     });

  }

  cancelAddSession() {
      this.addMode = false;
  }
}
