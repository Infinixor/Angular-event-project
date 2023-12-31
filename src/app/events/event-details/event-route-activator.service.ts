import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";
import { Injectable } from "@angular/core"

@Injectable()
export class EventRouteActivator {
    constructor(private eventService:EventService , private router:Router){
        
    }
    canActivate(route:ActivatedRouteSnapshot){
       const eventExists = !!this.eventService.getEvent(+route.params['id']) 
    if (!eventExists)
        this.router.navigate(['/404'])
    return eventExists
    }
}