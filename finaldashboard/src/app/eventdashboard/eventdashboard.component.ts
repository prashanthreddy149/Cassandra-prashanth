import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lists } from '../Lists';
// import { RestService } from '../rest.service';
import { EventserviceService } from '../eventservice.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexDataLabels
} from "ng-apexcharts";
import { data } from 'jquery';
@Component({
  selector: 'app-eventdashboard',
  templateUrl: './eventdashboard.component.html',
  styleUrls: ['./eventdashboard.component.css']
})
export class EventdashboardComponent implements OnInit {
constructor( private  eventserviceService:  EventserviceService){}
lists:Lists[]=[];
chartSeries:ApexNonAxisChartSeries=[];
chartDetails:ApexChart={
  type:'pie',
  toolbar:{
    show:true
  }
};
chartTitle:ApexTitleSubtitle = {
  text: 'Leading Events',
  align: 'center'
};
chartDataLabels:ApexDataLabels = {
  enabled:true
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

    this.eventserviceService.getAllList()
    .subscribe(
      data=>{
        this.lists = data.list;
        this.eventTypeCount = data.eventTypeCount;
        this.chartSeries = Object.values(data.pieListData);
        this.chartLabels = Object.keys(data.pieListData);
      }
    );
}

onDeviceSelected(selectedDeviceName:any):void{
  //console.log(event);
  //this.DeviceSelected = event.target.value;
  this.eventserviceService.getDeviceForSelectedDeviceByParam(selectedDeviceName)
  .subscribe(
    data=>{       
      this.lists = data.list;
      this.eventTypeCount = data.eventTypeCount;
      this.chartSeries = Object.values(data.pieListData);
      this.chartLabels = Object.keys(data.pieListData);
    }
  );
}
onEventSelected(selectedEventNumber:any):void{
  this.eventserviceService.getDeviceForSelectedEventByParam(selectedEventNumber)
  .subscribe(
    data=>{       
      this.lists = data.list;
      this.eventTypeCount = data.eventTypeCount;
      this.chartSeries = Object.values(data.pieListData);
      this.chartLabels = Object.keys(data.pieListData);
    }
  );
}
onSateSelected(selectedStateName:any):void{
  this.eventserviceService.getDeviceForSelectedStateByParam(selectedStateName)
  .subscribe(
    data=>{       
      this.lists = data.list;
      this.eventTypeCount = data.eventTypeCount;
      this.chartSeries = Object.values(data.pieListData);
      this.chartLabels = Object.keys(data.pieListData);
    }
  );
}

}
