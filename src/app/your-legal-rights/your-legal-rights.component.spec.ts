import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLegalRightsComponent } from './your-legal-rights.component';

describe('YourLegalRightsComponent', () => {
  let component: YourLegalRightsComponent;
  let fixture: ComponentFixture<YourLegalRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourLegalRightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourLegalRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
