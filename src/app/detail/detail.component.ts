import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  currentCharacter: Character;

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.route.params.subscribe(params => {
      if (params['id'] != '' && params['id'] != null) {
        this.currentCharacter = this.listService.getCharacterById(params['id']);
      }
    })
  }

}
