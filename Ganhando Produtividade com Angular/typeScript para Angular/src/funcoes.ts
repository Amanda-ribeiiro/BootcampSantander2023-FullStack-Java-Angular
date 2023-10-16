// Os parâmetros das funções são tipados, e o retorno é do tipo apropriado

function addNumber(x: number,y: number): number {
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}
let soma: number = addNumber(4, 7);

console.log(addToHello("Amanda"));

// declarar dois tipos na função
function CallToPhone(phone: number | string): number | string {
    return phone;
}

console.log(CallToPhone(1234));

// Sempre que tiver uma `function` que é `assync` tem que retornar uma `promise` do tipo do valor
async function getDatabase(id: number): Promise<string> {
    return "Amanda";
}
