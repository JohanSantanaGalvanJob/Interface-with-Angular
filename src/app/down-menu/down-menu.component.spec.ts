import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownMenuComponent } from './down-menu.component';

describe('DownMenuComponent', () => {
  let component: DownMenuComponent;
  let fixture: ComponentFixture<DownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
