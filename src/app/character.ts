export class Character {
    type: string;
    name: string;
    age: number;

    constructor(type: string = "Ez", name: string = "Game", age: number = 7) {
        this.type = type;
        this.name = name;
        this.age = age;
    }
}