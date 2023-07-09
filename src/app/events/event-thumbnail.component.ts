import { Component ,EventEmitter,Input, Output} from "@angular/core";


@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div  [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        
        <!-- 
        Using ngStyle 
        <div  [ngStyle]="{'color':event?.time==='8:00 am' ? '#003300' : '#bbb','font-weight':event?.time==='8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">
        -->


        <!-- 
        Style Binding using style.color 
        <div  [style.color]="event?.time==='8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="event?.time">
        -->
        
        
        <!-- Example of class binding using ngClass -->
        <!-- <div [ngClass]="getStartTimeClassArray()" [ngSwitch]="event?.time"> -->
        <!--class.green example  
            <div [class.green]="event?.time==='8:00 am'" [ngSwitch]="event?.time"> -->
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(NormaL Start)</span>
        </div>

        <div>Price: \${{event?.price}}</div>
        <div *ngIf= "event?.location">
            <span>Location: {{event?.location.address}}</span>
            <span class=pad-left></span>
            <span>{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <!--
            *ngIf remove the element while hidden attribute only hides the element 
            <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class=pad-left></span>
            #Interpolation
            <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div> -->
        <div *ngIf= "event?.onlineUrl">
            Online URL : {{event?.onlineUrl}}
        </div>
    </div>

    `,
    styles:[`
        .bold{
            font-weight : bold;
        }
        .green{
            color :#003300 !important;
        }
        .thumbnail{
            min-height:210px;
        }
        .pad-left {
            margin-left: 10px;
        }
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent{
    @Input() event:any
    #someProperty:any = "some value"
    logFoo(){
        console.log('Foo')
    }
    getStartTimeStyle():any{
        if (this.event && this.event.time ==='8:00 am')
            return {color :'#003300', 'font-weight':'bold'}
        return {}
    }
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time ==='8:00 am'
        return{green:isEarlyStart, bold:isEarlyStart}
    }
    getStartTimeClassString(){
        if (this.event && this.event.time ==='8:00 am')
            return 'green bold'
        return ''
    }
    getStartTimeClassArray(){
        if (this.event && this.event.time ==='8:00 am')
            return ['green', 'bold']
        return []
    }
}