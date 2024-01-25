import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSMLNComponent } from './osm-ln/osm-ln.component';
import { OSMLAComponent } from './osm-la/osm-la.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OsmMapComponent } from './osm-map/osm-map.component';

@NgModule({
  declarations: [
    OSMLNComponent,
    OSMLAComponent,
    OsmMapComponent
  ],
  imports: [
    CommonModule,
    LeafletModule
  ],
  exports:[
    OSMLAComponent,
    OSMLNComponent,
    OsmMapComponent
  ]
})
export class OSMModule { }
