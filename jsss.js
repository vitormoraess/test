class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log("Funcionário ", this.nome, " se apresentando...");
    }

    trabalhar() {
        console.log("Funcionário: ", this.nome, " trabalhando...");
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log("Gerente ", this.nome, " gerenciando departamento: ", this.departamento);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log("Desenvolvedor ", this.nome, " programando com a linguagem: ", this.linguagem);
    }
}

let gerente = new Gerente("Karina", 38, "Gerente de Projetos", "TI");
let desenvolvedor = new Desenvolvedor("Vitor", 20, "Desenvolvedor Backend", "Ruby");

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();
