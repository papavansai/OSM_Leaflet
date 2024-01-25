import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OSMModule } from '../osm/osm.module';
import { Map} from 'leaflet';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OSMModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OSM_17';


  receiveMap(map: Map) {
    var map = map;
  }

  receiveZoom(zoom: Number) {
    var zoom = zoom;
  }
}
