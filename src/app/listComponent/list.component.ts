import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    @Input()
    items: Character[] = [];

    constructor(private comunicatorService: ComunicatorService){
    }

    ngOnInit(){
        this.items.push(new Character());
    }

    selectItem(item: Character) {
        // chiamo il net nel subject
        this.comunicatorService.changeSubject(item);
    }

}
