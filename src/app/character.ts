export class Character {
    type: string;
    name: string;
    age: number;
    id:number;

    constructor(id: number, type: string = "Ez", name: string = "Game", age: number = 7) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.age = age;
    }
}