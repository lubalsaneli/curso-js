// Arredondando um número 

const valorInput = 110.3670490439;
const inputArredondado = Math.round(valorInput); // para o inteiro mais próximo
const inputCasasDecimais = valorInput.toFixed(2); // arredonda para cima,retorna string

console.log(inputArredondado);
console.log(inputCasasDecimais);

// Formatando o resultado para a moeda REAL

/*
    toLocaleString() converte um número para uma string

    argumentos:

    . style: estilo do formato utilizado 
        decimal (para representar número simples)
        currency (que diz respeito ao formato monetário e que vai indicar a moeda a ser utilizada)
        percent (para formato percentual)

    . currency: a moeda para usar na formatação monetária

*/  

const salario = 110.3202139021;
const formatado = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(formatado);

// + métodos de arredondamento

const valorTeste = 10.1203921
const ceil = Math.ceil(valorTeste); // número inteiro maior que o passado
const floor = Math.floor(valorTeste); // número inteiro menor que o passado
console.log(ceil);
console.log(floor);
