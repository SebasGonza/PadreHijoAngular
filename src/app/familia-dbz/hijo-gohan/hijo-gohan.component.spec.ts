import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoGohanComponent } from './hijo-gohan.component';

describe('HijoGohanComponent', () => {
  let component: HijoGohanComponent;
  let fixture: ComponentFixture<HijoGohanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoGohanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoGohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
