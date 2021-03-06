import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound.component';
import { EventRouteActivator } from './events/event-details/event-route-activator';
import { EventListResolver } from './events/event-list.resolver';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventResolver } from './events/event-details/event-resolver';

const routes: Routes = [
  {path: 'events/new' , component: CreateEventComponent, canDeactivate:[ 'canDeactivateCreateEvent']},
  {path: 'events' , component: EventsListComponent, resolve:{events: EventListResolver}},
  {path: 'events/:id' , component: EventDetailsComponent, resolve: {event: EventResolver} },
  {path: 'events/session/new' , component: CreateSessionComponent},
  {path: '404', component: NotfoundComponent },
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
