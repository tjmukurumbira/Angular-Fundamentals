import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText: string ='';
  foundSessions: ISession[];
  constructor(public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchText)
  {
    this.eventService.searchSessions(searchText)
    .subscribe(sessions => {
      this.foundSessions = sessions;

    })

   }
}
