import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute, Params } from "@angular/router";
import { ISession } from "../shared";



@Component({
    templateUrl: './event-details.component.html',
    styles:[`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image { height:100px;}
        a {cursor:pointer}
    `]

})

export class EventDetailsComponent implements OnInit {
    event : any ;
    addMode: boolean;

    filterBy:string = 'all';
    sortBy:string = 'votes';
    constructor(private eventService:EventService , private route : ActivatedRoute){

    }
    ngOnInit(){
        this.route.params.forEach((params: Params)=>{
            this.event =this.eventService.getEvent(+params['id']);
            this.addMode=false; //reseting the states while routing to the same component
        })
        //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
    addSession(){
        this.addMode=true
    }
    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.event.sessions.map(s=>s.id));
        session.id=nextId+1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode=false
    }
    cancelAddSession(){
        this.addMode=false
    }
}