import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-osm-la',
  templateUrl: './osm-la.component.html',
  styleUrl: './osm-la.component.scss'
})
export class OSMLAComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18})
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };
}
