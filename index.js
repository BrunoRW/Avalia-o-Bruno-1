// Questão 1

let a = 10;
let b = 20;
let c = a * b;
let d = a + b;
let e = (a + b + c + d) / 3;

console.log(`
----
Questão 1\n
A: ${a}\n
B: ${b}\n
C: ${c}\n
D: ${d}\n
Média: ${e}
----
`);


// Questão 2

let salario = 3000;
let novo = 0;
let reajuste = 0;
let indice = 0;

if(salario <= 2000){
    indice = 15;
    novo = salario * 1.12;
} else if(salario <= 4000 && salario >= 2000.01){
    indice = 12;
    novo = salario * 1.12;
} else if(salario > 4000){
    indice = 10;
    novo = salario * 1.12;
}

reajuste = novo - salario;

console.log(`
----
Questão 2\n
Novo Salário: R$${novo}\n
Valor reajustado: R$${reajuste}\n
Índice reajustado: ${indice}%
----
`)

// Questão 3

let base = 50;

let minicurso = "S";

let traducao = "S";

if(minicurso == "S") base += 20;
if(traducao == "S") base += 10;

console.log(`
----
Questão 3\n
Valor da inscrição: R$${base}
----
`)

// Questão 4

let total = 50;
let mulheres = 0;
let maisFilmes = 0;
let percentualM = 0;

for(let i = 0; i < total; i++){
    let sexo = Math.floor(Math.random() * 2);
    let filmes = Math.floor(Math.random() * 20 + 1);
    
    if(sexo == 1) mulheres++;
    if(filmes > 10) maisFilmes++;

}

percentualM = (mulheres / total) * 100;

console.log(`
----
Questão 4\n
Quantidade de mulheres: ${mulheres}\n
Quantidades de pessoas assistiram mais que 10 filmes: ${maisFilmes}\n
Percentual de mulheres: ${percentualM}%\n
----
`)

// Questão 5
// Muito raro algum tirar conceito A pois tem
// pouca chance de gerar todas as notas do aluno acima de 9

let totalAlunos = 10;
let provas = 10;
let alunos = [];

for(let i = 0; i < totalAlunos; i++){
    let notas = [];
    for(let u = 0; u < provas; u++){
        let rand = Math.random() * 10;
        notas.push(rand.toFixed(2))
    }
    alunos.push(notas);
}
let mediaGeral = 0;
let conceitoA = 0;

alunos.map(e=>{
    let total = 0;
    e.map(p=>{
        total += parseFloat(p);
        mediaGeral += parseFloat(p);
    })
    if((total / provas) > 9) conceitoA++;
})

mediaGeral /= totalAlunos;
mediaGeral /= provas;
mediaGeral = mediaGeral.toFixed(2)

console.log(`
----
Questão 5\n
Quantidade de alunos conceito A: ${conceitoA}\n
Média geral da turma: ${mediaGeral}
----
`)



