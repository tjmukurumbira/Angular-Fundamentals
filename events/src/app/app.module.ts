import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { HeaderComponent } from './nav/header.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotfoundComponent } from './errors/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './events/event-details/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './shared/toastr.service';
import { JQ_TOKEN } from './shared/jquery.service';
import { SimpleModelComponent } from './shared/simple-model.component';
import { ModalTriggerDirective } from './shared/modal-trigger.directive';

let toastr: Toastr = window['toastr'];
let jquery =  window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModelComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: JQ_TOKEN, useValue: jquery},
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
     },
    {provide : 'canDeactivateCreateEvent', useValue: CheckDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CheckDirtyState(component : CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not save this event, do you want to cancel')
  return true;
}
