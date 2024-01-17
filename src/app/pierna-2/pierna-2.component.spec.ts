import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pierna2Component } from './pierna-2.component';

describe('Pierna2Component', () => {
  let component: Pierna2Component;
  let fixture: ComponentFixture<Pierna2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pierna2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pierna2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
