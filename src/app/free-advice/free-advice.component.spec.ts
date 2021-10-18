import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FREEADVICEComponent } from './free-advice.component';

describe('FREEADVICEComponent', () => {
  let component: FREEADVICEComponent;
  let fixture: ComponentFixture<FREEADVICEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FREEADVICEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FREEADVICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
