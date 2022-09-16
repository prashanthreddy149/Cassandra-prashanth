import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lists } from '../Lists';
// import { RestService } from '../rest.service';
import { EventserviceService } from '../eventservice.service';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {
  ChartComponent,
  // ApexAxisChartSeries,
  // ApexChart,
  // ApexXAxis,
   ApexTitleSubtitle,
  // ApexNonAxisChartSeries,
  // ApexDataLabels,
  // ApexResponsive,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend
} from "ng-apexcharts";
import { data } from 'jquery';

@Component({
  selector: 'app-eventdashboard',
  templateUrl: './eventdashboard.component.html',
  styleUrls: ['./eventdashboard.component.css']
})
export class EventdashboardComponent implements OnInit {
  detaildata!: FormGroup; 
  
constructor( private  eventserviceService:  EventserviceService,private fb : FormBuilder){}
table:Lists[]=[];

chartSeries:ApexNonAxisChartSeries=[];
chartDetails:ApexChart={
  type:'pie',
  toolbar:{
    show:true
  }
  
};

chartTitle:ApexTitleSubtitle = {
  // text: 'Leading Events',
  align: 'center',
  
};
chartDataLabels:ApexDataLabels = {
  enabled:false
};
chartLabels:any;
eventTypeCount:any;
deviceList:any;
eventList:any;
stateList:any;
DeviceSelected:string='';
EventSelected:string='';
StateSelected:string='';
column = ["Context","Device","Event","FirstOccurrTime","LastOccurrTime","OccurrCount","PersistTime","ReceiveTime","State"];
index = ["context","device","event","firstoccurrencetime","lastoccurrencetime","occurrencecount","persisttime","receivetime","state"];
ngOnInit():void 
  {
    this.eventserviceService.getlist()
    .subscribe(
      data=>{
        this.deviceList = data.device;
      }
    );

    this.eventserviceService.getlist()
    .subscribe(
      data2=>{
        this.eventList = data2.event;
      }
    );
    this.eventserviceService.getlist()
    .subscribe(
      data3=>{
        this.stateList = data3.state;
      }
    );
    this.detaildata = this.fb.group({
      device: [''],
      event: [''],
      state: ['']
    })
    this.eventserviceService.getAllList()
    .subscribe(
      data=>{
        this.table = data.list;
        // console.log("data.list",data.list);
        this.eventTypeCount = data.eventTypeCount;
        this.chartSeries = Object.values(data.pieListData);
        this.chartLabels = Object.keys(data.pieListData);
      }
    );
}



// showdashboard(selectedDeviceName:any,selectedEventName:any,selectedStateName:any):void{

//   console.log(this.detaildata.value);
//   console.log(this.detaildata.get['device'].value);
  
//   // this.eventserviceService.getSelectedDataReport(selectedDeviceName,selectedEventName,selectedStateName)
//   // .subscribe(
//   //   data=>{       
//   //     this.lists = data.list;
//   //     this.eventTypeCount = data.eventTypeCount;
//   //     this.chartSeries = Object.values(data.pieListData);
//   //     this.chartLabels = Object.keys(data.pieListData);
//   //   }
//   // );

// }
onClickSubmit(data):void {
  // alert("Entered Device id : " + data.device);
 

 

      if (data.device == "" && data.event != "" && data.state != "")
      {
        // alert("device is null");
        this.eventserviceService.getUserWithoutDevice(data.event,data.state)
        .subscribe(
          data=>{    
            // this.lists = data.device;
            this.table = data.list;
            this.eventTypeCount = data.eventTypeCount;
            this.chartSeries = Object.values(data.pieListData);
            this.chartLabels = Object.keys(data.pieListData);
          }
        );
      };
      if (data.event == "" && data.state != "" && data.device != "")
      {
        // alert("event is null");
        this.eventserviceService.getUserWithoutEvent(data.device,data.state)
        .subscribe(
          data=>{    
            // this.lists = data.device;
            this.table = data.list;
            this.eventTypeCount = data.eventTypeCount;
            this.chartSeries = Object.values(data.pieListData);
            this.chartLabels = Object.keys(data.pieListData);
          }
        );
      };
      if (data.state == ""&& data.event != "" && data.device != "")
      {
        // alert("state is null");
        this.eventserviceService.getUserWithoutState(data.device,data.event)
        .subscribe(
          data=>{    
            this.table = data.list;
            // this.lists = data.device;
            this.eventTypeCount = data.eventTypeCount;
            this.chartSeries = Object.values(data.pieListData);
            this.chartLabels = Object.keys(data.pieListData);
          }
        );
      };
      if (data.state == "" && data.event == "")
      {
        // alert("event & state is null");
        this.eventserviceService.getUserWithoutStateAndEvent(data.device)
        .subscribe(
          data=>{    
            this.table = data.list;
            // this.lists = data.device;
            this.eventTypeCount = data.eventTypeCount;
            this.chartSeries = Object.values(data.pieListData);
            this.chartLabels = Object.keys(data.pieListData);
          }
        );
      };
      if (data.device != "" && data.event != "" && data.state != ""){
        // alert("all are available");
        this.eventserviceService.getUsersMultipleParams(data.device,data.event,data.state)
        // this.eventserviceService.getSelectedDataReport(selectedDeviceName,selectedEventName,selectedStateName)
        .subscribe(
              data=>{   
                this.table = data.list; 
                // this.lists = data.device;
                this.eventTypeCount = data.eventTypeCount;
                this.chartSeries = Object.values(data.pieListData);
                this.chartLabels = Object.keys(data.pieListData);
              }
            );
      }
}

}


