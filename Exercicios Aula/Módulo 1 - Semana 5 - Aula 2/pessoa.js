class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    getAnoNascimento() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.idade;
    }
}

export default Pessoa;