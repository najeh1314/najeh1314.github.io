import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchComponent } from './touch.component';

describe('TouchComponent', () => {
  let component: TouchComponent;
  let fixture: ComponentFixture<TouchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TouchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
