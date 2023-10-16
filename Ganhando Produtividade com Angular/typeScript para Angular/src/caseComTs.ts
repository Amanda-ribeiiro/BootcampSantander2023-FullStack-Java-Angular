type Hero = {
    nome: string;
    vulgo: string;
    telefone: number;
};

function ligarPara(heroi: Hero) {
    console.log("Ligando para: " + heroi.telefone);
}

ligarPara({
    nome: "Steve Rogers",
    vulgo: "Capitão América",
    telefone: 1131713388,
})