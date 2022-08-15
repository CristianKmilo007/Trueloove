import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAllComponent } from './match-all.component';

describe('MatchAllComponent', () => {
  let component: MatchAllComponent;
  let fixture: ComponentFixture<MatchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
