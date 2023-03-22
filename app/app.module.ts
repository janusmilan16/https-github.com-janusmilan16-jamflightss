import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AvailableFlightsService } from './service/available-flights.service';
import { FlightService } from './service/flight.service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PromosComponent } from './promos/promos.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    FlightSearchComponent,
    FlightSearchResultComponent,
    PromosComponent,
    OrdersComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    InMemoryWebApiModule.forRoot(AvailableFlightsService),
    NouisliderModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'flight-search',
        component: FlightSearchComponent,
      },
      {
        path: 'promos',
        component: PromosComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
    ]),
  ],
  providers: [FlightService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
