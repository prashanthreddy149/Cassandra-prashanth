import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Lists } from '../Lists';
// import { RestService } from '../rest.service';
import { EventserviceService } from '../eventservice.service';
import { data } from 'jquery';
@Component({
  selector: 'app-eventdashboard',
  templateUrl: './eventdashboard.component.html',
  styleUrls: ['./eventdashboard.component.css']
})
export class EventdashboardComponent implements OnInit {
constructor( private  eventserviceService:  EventserviceService){}

deviceList:any;
eventList:any;
stateList:any;
deviceValue: any;
eventTypeCountList:any;
pieListData:any;
ngOnInit():void 
  {
    this.eventserviceService.getlist()
    .subscribe(
      data=>{       
        this.deviceList = data.device;
        this.eventList = data.event;
        this.stateList = data.state;
       
      }
      
    );
 
    this.eventserviceService.getEventTypeCount()


    .subscribe(
      data=>{       
        this.eventTypeCountList = data.eventcount;
       console.warn("get api data",this.eventTypeCountList);
       
      }
    );
    // this.eventserviceService.getlist()
    // .subscribe(
    //   data2=>{
    //     //console.warn("get api data",data.state);
      
    //   }
    // );

    // this.eventserviceService.getlist()
    // .subscribe(
    //   data3=>{
    //     //console.warn("get api data",data.state);
        
    //   }
    // );
  //   const myChart = new Chart("myChart", {
  //     type: 'pie',
  //     data: {
  //         labels: ['800000', '400000', '500000','700000'],
  //         datasets: [{
  //           label: 'Event Management System',
  //           data: [3, 2, 3, 5],
  //           backgroundColor: [
  //             'rgb(255, 99, 132)',
  //             'rgb(54, 162, 235)',
  //             'rgb(255, 205, 86)',
  //             'rgba(75, 192, 192)',
  //           ],
            
  //         }]
  //     },
    
  // });

  

}
onOptionsSelected(event:any) {
  this.eventserviceService.getListByParams(event,event,event)
  //  this.eventserviceService.getEventTypeCount(event,event,event)
    .subscribe(
      data=>{       
        this.deviceList = data.device;
       
        this.eventList = data.event;
        this.stateList = data.event;
        // this.eventTypeCountList = data.eventcount;
      
      }
    );
}

}
