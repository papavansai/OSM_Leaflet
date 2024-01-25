import { Component } from '@angular/core';
import { Map } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OSM_17A';

  constructor(private map: Map, private zoom: Number){}

  receiveMap(map: Map) {
    this.map = map;
  }

  receiveZoom(zoom: Number) {
    this.zoom = zoom;
  }
}
