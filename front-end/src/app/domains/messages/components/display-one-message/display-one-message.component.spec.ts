import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneMessageComponent } from './display-one-message.component';

describe('DisplayOneMessageComponent', () => {
  let component: DisplayOneMessageComponent;
  let fixture: ComponentFixture<DisplayOneMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayOneMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayOneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
