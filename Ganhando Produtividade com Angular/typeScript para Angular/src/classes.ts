// classes
class Character {
    name?: string;       //? estou passando que é opcional
    stregth: number;
    skill: number;


    constructor (stregth: number, skill: number){
        this.stregth = stregth;
        this.skill = skill;
    }

    attack() : void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p0 = new Character(10, 98);

// Data modifiers: public, private, protected

class Character2 {
    private name?: string;  //? estou passando que é opcional
    stregth: number;
    skill: number;


    constructor (name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack() : void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

// Character: superclass
// Magician: subclass
class Magician  extends Character{
    magicPoints:number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(stregth, skill);
        this.magicPoints = magicPoints;
        this.name = name;
    }
}

const p1 = new Character2("Ryu",10, 98);
const p2 = new Magician("Mago", 9, 30, 100);