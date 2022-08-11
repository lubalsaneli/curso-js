# Curso Java Script Alura

### Diferença entre os operadores == e ===?
A principal diferença entre o operador == e === em javascript é que o operador == FAZ a conversão de tipo dos operandos antes da comparação, enquanto o operador === compara os valores, bem como os tipos de dos dos operandos.

### Template String OU Template Literal
São strings que permitem expressões embutidas.

### Testando um valor NaN
Os operadores de igualdade (== e ===) não podem ser usados para testar um valor NaN. Ao invés disso utilize NUMBER.isNaN() ou isNaN().

~~~javascript
    NaN === NaN;            //falso
    Number.NaN === NaN;     //falso 
    isNaN(NaN); (true)      //verdadeiro
    isNaN(Number.NaN)       //verdadeiro
~~~

### Padrões de nomes no JavaScript
Cada linguagem possui seus próprios padrões. Eles servem não somente para a escrita de códigos que funcionem, mas também para criar nomes de variáveis, estruturar um programa e muito mais.
|| JavaScript é case-sensitive, ou seja, diferencia maiúsculas de minúsculas

O JavaScript trata os quatro exemplso abaixo como variáveis diferentes e não apresentará nenhum erro se você executar o programa:

~~~javascript
    const minhaVar = 1;
    const MinhaVar = "texto";
    const minhavar = "3";
    const MINHAVAR = 2;
~~~

Por isso, devido a essa gama de possibilidades utilizamos **conveções**, para padronizar as nomeações.

* camelCase : Esta é a convenção utilizada pelo JS para variáveis e funções.
* snake_case
* kebab-case
* PascalCase

Quando falamos de convenções, estamos falando de boas práticas e padronização.

### null e undefined
**undefined**
Um valor primitivo, que recebemos quando uma variável não teve um valor atribuído previamente.

**null**
Um valor primitivo, que representa uma ausência intencional de valor.

~~~javascript
    console.log(null == undefined); // true
    console.log(null === undefined); // false
~~~

