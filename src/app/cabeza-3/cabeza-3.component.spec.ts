import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabeza3Component } from './cabeza-3.component';

describe('Cabeza3Component', () => {
  let component: Cabeza3Component;
  let fixture: ComponentFixture<Cabeza3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabeza3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cabeza3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
