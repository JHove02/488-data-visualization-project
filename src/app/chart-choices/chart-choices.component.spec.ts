import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChoicesComponent } from './chart-choices.component';

describe('ChartChoicesComponent', () => {
  let component: ChartChoicesComponent;
  let fixture: ComponentFixture<ChartChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartChoicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
