import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Medio2Component } from './medio-2.component';

describe('Medio2Component', () => {
  let component: Medio2Component;
  let fixture: ComponentFixture<Medio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medio2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Medio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
