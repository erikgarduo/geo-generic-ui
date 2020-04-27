import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GenericGeoPointService } from '../service/generic-geo-point.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap) map: GoogleMap;
  @ViewChild(MapInfoWindow) info: MapInfoWindow;

  private iconBase = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';

  zoom = 10;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers = [];
  infoContent = '';

  products = [];
  constructor(private apiService: GenericGeoPointService) { }
  
  ngOnInit() {
    
    
      
    navigator.geolocation.getCurrentPosition(position => {  
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.apiService.fetchData().subscribe((data: any[])=>{  
        console.log(data);  
        this.products = data;  
        this.getGeoData();
      });
      
      
    });
  }

  getGeoData(){
    this.products.forEach(element => {
      this.markers.push({
        position: {
          lat: element.lat,
          lng: element.lon,
        },
        label: {
          color: 'blue',
          text: element.name,
        },
        title: 'Availability '+ element.available?'Yes':'No',
        info: element.description,
        options: {
          animation: google.maps.Animation.DROP,
        },
        //icon: this.iconBase + 'parking_lot_maps.png'
        icon: this.iconBase
      });  
    });

    
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }

}
