import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventserviceService {
  constructor(private httpclient:HttpClient){}

getlist():Observable<any>{
    return this.httpclient.get("/d3api/getDropDownList");
}

getAllList():Observable<any>{
    return this.httpclient.get("/d3api/getDropDown");
}

getDeviceForSelectedDeviceByParam(selectedDeviceName:string):Observable<any>{

  let params1 = new HttpParams().set('device',selectedDeviceName);
  return this.httpclient.get("/d3api/getDropDown",{params:params1});

}

getDeviceForSelectedEventByParam(selectedEventNumber:string):Observable<any>{

  let params1 = new HttpParams().set('event',selectedEventNumber);
  return this.httpclient.get("/d3api/getDropDown",{params:params1});

}

getDeviceForSelectedStateByParam(selectedStateName:string):Observable<any>{

  let params1 = new HttpParams().set('state',selectedStateName);
  return this.httpclient.get("/d3api/getDropDown",{params:params1});

}

 
}
