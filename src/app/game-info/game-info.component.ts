import { Component, OnInit } from '@angular/core';
import { GameInfoService } from './../services/game-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  Games: any = [];

  constructor(private gameInfoService: GameInfoService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameInfoService.getGames().subscribe((response) =>{
      this.Games=response;
    })
  }

}
