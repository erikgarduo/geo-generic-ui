import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { GenericGeoPointService } from './service/generic-geo-point.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GenericGeoPointService],
  bootstrap: [AppComponent]
})
export class AppModule { }
