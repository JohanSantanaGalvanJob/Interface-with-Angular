import { Component, OnInit } from '@angular/core';
import { GameInfoSearchSearchService } from './../services/game-info-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-info-search',
  templateUrl: './game-info-search.component.html',
  styleUrls: ['./game-info-search.component.scss']
})
export class GameInfoSearchComponent implements OnInit {

  GamesSearch: any = [];

  constructor(private gameInfoSearchService: GameInfoSearchSearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameInfoSearchService.getGames().subscribe((response) =>{
      this.GamesSearch=response;
    })
  }

}
