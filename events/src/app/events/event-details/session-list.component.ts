import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/shared/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
 @Input() sortBy: string;
  @Input() filterBy: string;
  @Input() sessions: ISession[];
  filteredSessions: ISession[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.filteredSessions.sort(sortByNameAsc)
      : this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter: string) {
     if (filter === 'all') {
        this.filteredSessions = this.sessions.slice(0);
     }
     else {
      this.filteredSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase()=== filter;
      });
     }
  }


}

function sortByNameAsc(s1: ISession, s2: ISession){
  if (s1.name>s2.name) return 1
  else if (s1.name == s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
  return s2.voters.length - s1.voters.length;
}
