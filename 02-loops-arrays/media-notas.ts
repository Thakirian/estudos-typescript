// Exercício 2: O Professor Rigoroso (Loops + Arrays)
// Objetivo: Treinar for, arrays e acumuladores.
// O Problema: Você tem uma lista de notas de um aluno e precisa saber a média final. Requisitos:

// * Crie um array [10, 8, 5, 9];
// * Crie uma variável soma que comece com 0.
// * Use um loop for para percorrer o array, somando cada nota na variável soma.
// * No final (fora do loop), divida a soma pelo tamanho do array (notas.length) para achar a média.
// * Imprima a média.

// 1. Definição do Array (Perfeito)
const notas: number[] = [10, 6, 5, 5];

// 2. Acumulador
let soma: number = 0;

// 3. Loop Moderno (Solução do Erro)
// Leia-se: "Para cada 'nota' dentro da lista 'notas'"
for (let nota of notas) {
    soma = soma + nota; // ou soma += nota
}

// 4. Cálculo da Média
const media: number = soma / notas.length;

// 5. Saída
console.log(`Média final: ${media}`);

// 6. Bonus: Status
if (media >= 7) {
    console.log("Status: APROVADA");
} else {
    console.log("Status: REPROVADA");
}