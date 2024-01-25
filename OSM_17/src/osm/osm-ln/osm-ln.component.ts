import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-osm-ln',
  templateUrl: './osm-ln.component.html',
  styleUrl: './osm-ln.component.scss'
})
export class OSMLNComponent implements OnInit{

  public map: any;
  public latLangFields: any =[];
  private myIcon = L.icon({
    iconUrl: 'assets/my-icon.png',
    iconSize: [30, 30],
}); 

constructor(){
  this.getLocation();
}
  ngOnInit(){
    this.map = L.map('map').setView([17.4065, 78.4772],14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: '© OpenStreetMap contributors'}).addTo(this.map);
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.latLangFields = [latitude, longitude];
          console.log(this.latLangFields)
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getCurrentLocation(){
    L.marker(this.latLangFields,{icon: this.myIcon, draggable: true, autoPan: true} ).addTo(this.map);
    this.map.flyTo(this.latLangFields, 18);
  }

}
