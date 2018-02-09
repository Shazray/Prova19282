import { Component} from '@angular/core';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  currentCharacter: Character;

  constructor(private comunicatorService: ComunicatorService) {

    comunicatorService.mySubject$.subscribe( (newValue: Character) => {

      this.currentCharacter = newValue;

    });

  }
}
