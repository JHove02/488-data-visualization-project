import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOptionsComponent } from './data-options.component';

describe('DataOptionsComponent', () => {
  let component: DataOptionsComponent;
  let fixture: ComponentFixture<DataOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
