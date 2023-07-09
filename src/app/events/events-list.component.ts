import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
//import { ToastrService } from 'ngx-toastr';
import { ToastrServices } from '../common/toastr.service';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcomin Angular Events</h1>    
        <hr/>
        <!-- Property Binding  -->
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        
            </div>
        </div>
        <!-- <h3>{{thumbnail.someProperty}}</h3> -->
        <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button> -->
    
    
    </div>

    `
})
export class EventsListComponent implements OnInit{
  events: any[] = [];

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
    constructor(private eventService : EventService,private toastr: ToastrServices){
      
    }
    handleThumbnailClick(eventName: any){
      this.toastr.success(eventName, 'Event Name:');
      //this.toastr.warning(eventName,'Yooo')
    }

    
}