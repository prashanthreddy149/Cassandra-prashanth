import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaincontentComponent } from './maincontent/maincontent.component';

import { SidenavComponent } from './sidenav/sidenav.component';
import { CassandradashboardComponent } from './cassandradashboard/cassandradashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { EventdashboardComponent } from './eventdashboard/eventdashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path:'eventdashboard' ,component : EventdashboardComponent ,
    // children: [
    //   { path:'eventdashboard' ,component : EventdashboardComponent },

    // ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MaincontentComponent,
   
    SidenavComponent,
    CassandradashboardComponent,
    EventdashboardComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    DataTablesModule,
    NgApexchartsModule,  
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
