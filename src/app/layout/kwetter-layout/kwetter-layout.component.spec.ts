import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwetterLayoutComponent } from './kwetter-layout.component';

describe('KwetterLayoutComponent', () => {
  let component: KwetterLayoutComponent;
  let fixture: ComponentFixture<KwetterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwetterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KwetterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
