var nome = 'Hugo Viegas'; //variável global
	
function retornarNome() {
    var nome = 'Igor Viegas'; //variável não pode ser puxada fora da função
    return nome;
    }
    
console.log(nome)

var nome = 'Hugo'; //sofrendo reatribuição
var nome = 'Igor';
var nome = "Juliano"; //o que vale é sempre a última declarada

console.log(nome);

let nomee = 'Igor'; //definido uma vez, não pode declarar novamente por outra variável
nomee = 'Juliano';
nomee = 'Hugo'; //reatribuição da variável let

console.log(nomee)

const pessoa = {
	nome: 'Igor',
	sobrenome: 'Viegas'
} //variável constante, não pode ter outra "pessoa" em qualquer outra nem pode ser dado outro valor.

pessoa.nome = 'Hugo' //alterado o conteúdo da variável "pessoa".
console.log(pessoa);
