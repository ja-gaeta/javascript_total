// Conjunto de Caracteres UTF-16

var e = "𝑒"; // 𝑒 é um caracter com 17-bit (codepoint 0x1d452)
var p = "π"; // π é um caracter com 16-bit (codepoint 0x03x0)

console.log(p.length);  // 1: π consiste de 1 elemento de 16-bit
console.log(e.length);  // 2: 𝑒 tem dois valores de 16-bit: "\ud835\udc52"

// Sequências de Escape

console.log("caf\u00e9");  // saída: "café"

// Literais (literals)

12                   // o número doze
1.2                  // o número 1,2 (um inteiro e dois décimos)
"Olá mundão velho!"  // uma cadeia (string) de texto, usando aspas duplas
'Oi'                 // outra string, usando aspas simples
true                 // um valor booleano (verdadeiro)
false                // o outro valor boleando (falso)
// /javascript/g        // uma expressão regular (regular expression)
null                 // ausência de um objeto

// Identificadores (nomes)

/*
    - Começar com uma letra, sublinha (_), cifrão ($)
    - Demais podem ser letras, dígitos, sublinhas ou cifrões

    Ex.:
            i                   // uso em contadores e loops
            minhaVariavel       // forma preferida (camel case)
            minha_variavel      // alternativa válida, menos usada
            v21                 // evitar abreviações
            _simulacro          // evitar nas designações comuns
            $str                // evitar, exceto em jQuery
            canção              // não recomendável

    - Cuidado com as palavras reservadas da linguagem. (http://www.javascripter.net/faq/reserved.htm)

*/