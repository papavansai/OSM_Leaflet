import { Component, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';
import {Map, Control, DomUtil, ZoomAnimEvent , Layer, MapOptions, tileLayer, latLng, LeafletEvent } from 'leaflet';

@Component({
  selector: 'app-osm-map',
  templateUrl: './osm-map.component.html',
  styleUrl: './osm-map.component.scss'
})
export class OsmMapComponent implements OnInit, OnDestroy {
  @Output() map$: EventEmitter<Map> = new EventEmitter;
  @Output() zoom$:EventEmitter<Number> = new EventEmitter;

  @Input() options: MapOptions = {
    layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        opacity: 0.7,
                        maxZoom: 19,
                        detectRetina: true,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      })],
                      zoom:14,
                      center:latLng(17.4065,78.4772)
  }


  constructor(public map: Map, public zoom: Number){}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    this.map.clearAllEventListeners;
    this.map.remove();
  }

  onMapReady(map: Map){
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);

  }

  onMapZoomEnd(event: LeafletEvent){
    const e = event as ZoomAnimEvent;
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }

}
