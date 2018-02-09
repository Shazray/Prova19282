import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    @Input()
    items: Character[] = [];

    @Output()
    itemSelectedChanged = new EventEmitter<Character>();

    selectItem(item: Character) {
        this.itemSelectedChanged.emit(item);
    }

}
