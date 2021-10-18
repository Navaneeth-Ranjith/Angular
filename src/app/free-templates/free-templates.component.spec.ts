import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTemplatesComponent } from './free-templates.component';

describe('FreeTemplatesComponent', () => {
  let component: FreeTemplatesComponent;
  let fixture: ComponentFixture<FreeTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
