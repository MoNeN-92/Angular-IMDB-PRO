import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSeriesComponent } from './popular-series.component';

describe('PopularSeriesComponent', () => {
  let component: PopularSeriesComponent;
  let fixture: ComponentFixture<PopularSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
