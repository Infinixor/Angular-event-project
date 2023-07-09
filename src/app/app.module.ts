import { NgModule } from '@angular/core';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent
} from './events/index'
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrServices } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { LoginComponent } from './user/login.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    LoginComponent
  ],
  providers:[
    EventService,
    ToastrServices, 
    EventRouteActivator,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
  
}
export function checkDirtyState(component:CreateEventComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event , do you really want to cancel?')
  return true
}
