import { Component } from '@angular/core';
import { Character } from './character';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Hello Class";
  items: Character[] = [];
  value: string;
  currentCharacter: Character;


  constructor(private listService: ListService) {

    this.items = listService.getCharactersList();
  }

  showElementChanged(Character: Character)
  {
    
    this.currentCharacter = Character;
    
  }

  showValue() {

    alert("valore: " + this.value);
    this.value = "";
  }
}
