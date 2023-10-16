// interfaces (type x interface)
// type: tipa um objeto
// interface: trabalhar com classe
type root = {
    id: number | TemplateStringsArray;
    name: string;
};

interface robot2 {
    id: number | string;
    name: string;
    sayHello(): string;
};

const bot1: root = {
    id: 1,
    name: "Amanda"
};
const bot2: robot2 = {
    id: "1",
    name: "Amanda",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `hello I'm  ${this.name}`;
    }
}

const p = new Pessoa (1, "Amanda")
console.log(p.sayHello());
