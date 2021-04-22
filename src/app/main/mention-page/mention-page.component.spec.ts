import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionPageComponent } from './mention-page.component';

describe('MentionPageComponent', () => {
  let component: MentionPageComponent;
  let fixture: ComponentFixture<MentionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
