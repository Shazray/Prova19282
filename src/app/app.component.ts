import { Component, ViewChild } from '@angular/core';
import { Character } from './character';
import { ListService } from './list.service';
import { AfterViewComponent } from './after-view/after-view.component';

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
  @ViewChild(AfterViewComponent) viewChild: AfterViewComponent;


  constructor(private listService: ListService) {

    this.items = listService.getCharactersList();
  }

  showElementChanged(Character: Character)
  {
    
    //this.currentCharacter = Character;
    
  }

  showValue() {

    alert("valore: " + this.value);
  }

ngAfterViewInit(){
  this.value = this.viewChild.valueAfterView;


}

ngAfterViewChecked(){

  this.value = this.viewChild.valueAfterView;
}


}
