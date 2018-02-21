import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    items: Character[] = [];

    constructor(private comunicatorService: ComunicatorService, private listService: ListService){
    }

    ngOnInit(){
        this.items = this.listService.getCharactersList();
    }

    selectItem(item: Character) {
        // chiamo il net nel subject
        this.comunicatorService.changeSubject(item);
    }

}
