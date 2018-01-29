import { Character } from "./character";

export class ListService {
    getCharactersList(): Character[] {
        let items: Character[] = [];
        items.push(new Character());
        items.push(new Character("Manga"));
        items.push(new Character("Mario", "Rossi"));
        items.push(new Character("Disney", "Pippo", 3211));
        return items;

    }
}