import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router} from '@angular/router';
import { Character } from '../character';
import { ComunicatorService } from '../comunicator.service';
import { ListService } from '../list.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html'
})
export class ListComponent {

    items: Character[] = [];

    constructor(private router: Router, private listService: ListService){
    }

    ngOnInit(){
        this.items = this.listService.getCharactersList();
    }

    selectItem(item: Character) {
        this.router.navigate(['/detail/'+item.id]);

    }

}
