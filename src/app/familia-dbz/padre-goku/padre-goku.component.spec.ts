import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreGokuComponent } from './padre-goku.component';

describe('PadreGokuComponent', () => {
  let component: PadreGokuComponent;
  let fixture: ComponentFixture<PadreGokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreGokuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreGokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
