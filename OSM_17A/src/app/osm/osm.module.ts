import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OsmMapComponent } from './osm-map/osm-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [
    OsmMapComponent
  ],
  imports: [
    CommonModule,
    LeafletModule
  ],
  exports: [
    OsmMapComponent
  ],
  providers:[]
})
export class OsmModule { }
