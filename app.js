// Tipos de Dados

// NÚMEROS

/*
    - Sem distinção entre inteiros e ponto-flutuantes
    - Números em JS são sempre ponto-flutuantes de 64-bit (formato no padrão IEEE 754)
    - Precisão:
        + Ponto-flutuante: 
            * Mínimo: ±5 × 10^−324
            * Máximo: ±1.7976931348623157 × 10^308
        + Inteiros:
            * Mínimo: −9007199254740992 (−2^53)
            * Máximo: 9007199254740992 (2^53)

    - Algumas operações em JS usam inteiros de 32-bit (p.ex.: índices de arrays e operadores bitwise)
*/

// Literais Inteiros
// Base 10
0
1
500000

// Base 16
0xff  // 15 * 16 + 15 = 255 (base 10)
0xCAFEBABE // 3.133.065.982 (base 10)

// Base 8 (evitar uso)
0377  // 3 * 64 + 7 * 8 + 7 = 255 (Base 10)