import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInfoSearchComponent } from './game-info-search.component';

describe('GameInfoSearchComponent', () => {
  let component: GameInfoSearchComponent;
  let fixture: ComponentFixture<GameInfoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameInfoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInfoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
