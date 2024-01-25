import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSMLAComponent } from './osm-la.component';

describe('OSMLAComponent', () => {
  let component: OSMLAComponent;
  let fixture: ComponentFixture<OSMLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OSMLAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OSMLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
