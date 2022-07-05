import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {
  constructor(private httpclient:HttpClient){}
getlist():Observable<any>{
    return this.httpclient.get("/d3api/getDropDownList")
    
}
getListByParams(device: any,event: any,state: any):Observable<any>{
  return this.httpclient.get('/d3api/getDropDown?'+'&device='+device+'&event='+event+'&state='+state)
  // return this.httpclient.get('/d3api/getDropDown?'+'&device='+device+'&event='+event+'&state='+state)
}
getEventTypeCount():Observable<any>{
  return this.httpclient.get('/d3api/getDropDown?'+'device=LNT90834559&event=800000&state=open')
  // return this.httpclient.get('/d3api/getDropDown?'+'&device='+device+'&event='+event+'&state='+state)
}
// getListByEvent(event: any):Observable<any>{
//   return this.httpclient.get("/d3api/getDropDown?event="+event)
//   // return this.httpclient.get('/d3api/getDropDown?'+'&device='+device+'&event='+event+'&state='+state)
// }
// getListByState(state: any):Observable<any>{
//   return this.httpclient.get("/d3api/getDropDown?state="+state)
//   // return this.httpclient.get('/d3api/getDropDown?'+'&device='+device+'&event='+event+'&state='+state)
// }
// onSubmit(values val){
//   let params = new HttpParams()
//       .set('device', val.device)
//       .set('event', val.event)

//   this.http.post("A URL", params).subscribe();

// }

}
