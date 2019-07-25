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


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    HeaderComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
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
