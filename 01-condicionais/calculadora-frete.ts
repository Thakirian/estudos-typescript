// Exercício 1: A Calculadora de Frete (Condicionais)
// Objetivo: Treinar if/else, tipos number e string.
// O Problema: Uma loja oferece frete grátis para compras acima de R$ 200,00. Caso contrário, o frete é R$ 15,00. Requisitos:

// * Crie uma variável valorPedido (number).
// * Crie uma lógica que verifique o valor.
// * Imprima no console o valor final (Pedido + Frete) e uma mensagem explicando se houve frete ou não.

// 1. Definição do Pedido
const valorPedido: number = 110; 

// 2. Inicialização do Frete (Usei 'let' pois o valor pode mudar)
let valorFrete: number = 0;

// 3. Lógica Condicional
if (valorPedido > 200){
    valorFrete = 0; // Frete Grátis
} else {
    valorFrete = 15; // Cobra frete
}

// 4. Cálculo Final
const valorTotal: number = valorPedido + valorFrete;

// 5. Saída de Dados (Com Crases/Backticks)
console.log(`Valor do pedido: R$ ${valorPedido}`);
console.log(`Valor do frete: R$ ${valorFrete}`);
console.log(`Valor total: R$ ${valorTotal}`);

