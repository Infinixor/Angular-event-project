import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcomin Angular Events</h1>    
        <hr/>
        <!-- Property Binding  -->
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>
        
            </div>
        </div>
        <!-- <h3>{{thumbnail.someProperty}}</h3> -->
        <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button> -->
    
    
    </div>

    `
})
export class EventsListComponent{
  events :any[]
    constructor(private eventService : EventService){
      this.events = this.eventService.getEvents()
    }
}