import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = []

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe( resp => {
        console.log(resp);
        this.juegos = resp;
      } )
  }

  votarJuego(juego: Game) {
    this.gameService.votarJuego( juego.id)
      .subscribe( (resp: any) => {
        if(resp.ok === true){
          Swal.fire({
            title: 'Gracias!',
            text: resp.mensaje,
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Oops!',
            text: resp.mensake,
            icon: 'error'
          })
        }
      })
  }

}
