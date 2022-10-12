import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownMenuUnloggedComponent } from './down-menu-unlogged.component';

describe('DownMenuUnloggedComponent', () => {
  let component: DownMenuUnloggedComponent;
  let fixture: ComponentFixture<DownMenuUnloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownMenuUnloggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownMenuUnloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
