import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pierna3Component } from './pierna-3.component';

describe('Pierna3Component', () => {
  let component: Pierna3Component;
  let fixture: ComponentFixture<Pierna3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pierna3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pierna3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
