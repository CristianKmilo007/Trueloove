import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleasuresComponent } from './pleasures.component';

describe('PleasuresComponent', () => {
  let component: PleasuresComponent;
  let fixture: ComponentFixture<PleasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PleasuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
