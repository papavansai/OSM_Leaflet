import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSMLNComponent } from './osm-ln.component';

describe('OSMLNComponent', () => {
  let component: OSMLNComponent;
  let fixture: ComponentFixture<OSMLNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSMLNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OSMLNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
