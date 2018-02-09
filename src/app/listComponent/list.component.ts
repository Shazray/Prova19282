import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    @Input()
    items: Character[] = [];

    constructor(){
    }

    ngOnInit(){
        this.items.push(new Character());
    }

    selectItem(item: Character) {
       // chiamo il next nel subject
    }

}
