import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewErrorComponent } from './view-error.component';

describe('ViewErrorComponent', () => {
  let component: ViewErrorComponent;
  let fixture: ComponentFixture<ViewErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
