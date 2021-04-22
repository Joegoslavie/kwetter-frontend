import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersPageComponent } from './followers-page.component';

describe('FollowersPageComponent', () => {
  let component: FollowersPageComponent;
  let fixture: ComponentFixture<FollowersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
