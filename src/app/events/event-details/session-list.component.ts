import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared/index";


@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy:string;
    visibleSessions : ISession[]=[];
    
    ngOnChanges(changes: SimpleChanges): void {
        if(this.sessions){
            this.filterSessions(this.filterBy);
        }
    }
    filterSessions(filter){
        if(filter==='all'){
            this.visibleSessions = this.sessions.slice(0);
        }else {
            this.visibleSessions = this.sessions.filter(sessions => {
                return sessions.level.toLocaleLowerCase() === filter;
            })
        }
    }
}