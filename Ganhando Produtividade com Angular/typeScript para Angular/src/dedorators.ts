function ExibirNome(target: any){
    console.log(target.name);
}

@ExibirNome
class Funcionario {}


// --version = propriedade privada. boa pratica
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Amanda"});
    };
}

@apiVersion("1.0.0")
class Api {
    name(name: any) {
        throw new Error("Method not implemented.");
    }
}

const api = new Api();
console.log(api);

// atrribute decorator
function apiVersion2(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Amanda"});
    };
}

function minLength(length: number) {
    return(target:any, key: string) => {
        let _value = target[key];


        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`The ${key} must be at least ${length} characters`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

@apiVersion2("1.0.0")
class Api2 {
    @minLength(10)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api2 = new Api2("produtos");
console.log(api2.name);