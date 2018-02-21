import { Character } from "./character";

export class ListService {

    private items: Character[] = [
        new Character(1),
        new Character(2, "Manga"),
        new Character(3, "Mario", "Rossi"),
        new Character(4, "Disney", "Pippo", 3211)
    ];


    getCharactersList(): Character[] {
        return this.items;
    }

    getCharacterById(id: number): Character {
        for (let character of this.items) {
            if (character.id == id)
                return character;
        }
        return null;
    }
}