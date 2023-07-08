import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcomin Angular Events</h1>    
        <hr/>
        <!-- Property Binding  -->
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <!-- <h3>{{thumbnail.someProperty}}</h3> -->
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>

    `
})
export class EventsListComponent{
    event1 = {
        id:1,
        name:'Angular Connect',
        date: '9/26/2035',
        time: '10:00 am',
        price: 599.99,
        imageUrl:'assets/images/angularconnect-shiled.png',
        location:{
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}