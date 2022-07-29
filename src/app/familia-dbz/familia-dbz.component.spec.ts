import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliaDbzComponent } from './familia-dbz.component';

describe('FamiliaDbzComponent', () => {
  let component: FamiliaDbzComponent;
  let fixture: ComponentFixture<FamiliaDbzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliaDbzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliaDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
