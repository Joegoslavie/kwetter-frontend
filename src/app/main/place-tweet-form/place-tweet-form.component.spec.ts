import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTweetFormComponent } from './place-tweet-form.component';

describe('PlaceTweetFormComponent', () => {
  let component: PlaceTweetFormComponent;
  let fixture: ComponentFixture<PlaceTweetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceTweetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceTweetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
