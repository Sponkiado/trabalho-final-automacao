// Gera uma tag de identificação com o nome do pet totalmente em letras maiúsculas.
function geradorDeTagsDeIdentificacao(nome) {
  if (typeof nome !== 'string') {
    throw new TypeError('O nome deve ser uma string');
  }

  const nomeCorrigido = nome.trim();

  if (nomeCorrigido.length === 0) {
    throw new Error('O nome não pode ser uma string vazia');
  }

  return nomeCorrigido.toUpperCase();
  
}
console.log(geradorDeTagsDeIdentificacao(' MadRUguiNhA '));

// Verifica se o pet pode ser adotado com base na idade e no porte.
function verificarSePodeSerAdotado(idade, porte) {
  if (typeof idade !== 'number' || isNaN(idade) || idade < 0) {
    throw new TypeError('A idade deve ser um número não negativo');
  }

  if (typeof porte !== 'string') {
    throw new TypeError('O porte deve ser uma string');
  }

  const portePadronizado = porte.trim().toUpperCase();

  if (portePadronizado.length === 0) {
    throw new Error('O porte não pode ser vazio');
  }

  if (idade >= 1 && portePadronizado === 'M') {
    return true;
  }

  return false;
}

console.log(verificarSePodeSerAdotado(1, 'M'));      // true
console.log(verificarSePodeSerAdotado(0.5, 'M'));    // false

// Calcula o consumo diário de ração com base no peso do pet.
function calcularConsumoDeRacao(nome, idade, peso) {
  if (typeof nome !== 'string') {
    throw new TypeError('O nome deve ser uma string');
  }

  if (typeof idade !== 'number' || isNaN(idade) || idade < 0) {
    throw new TypeError('A idade deve ser um número não negativo');
  }

  if (typeof peso !== 'number' || isNaN(peso) || peso <= 0) {
    throw new TypeError('O peso deve ser um número positivo');
  }

  const nomeCorrigido = nome.trim();

  if (nomeCorrigido.length === 0) {
    throw new Error('O nome não pode ser uma string vazia');
  }

  const consumo = peso * 300;

  return consumo;
}

console.log(calcularConsumoDeRacao('Pitoco', 1, 14.5));   // 4350
console.log(calcularConsumoDeRacao('Rex', 3, 10));        // 3000

// Decide a atividade ideal para o pet de acordo com seu porte.
function decidirTipoDeAtividadePorPorte(porte) {
  if (typeof porte !== 'string') {
    throw new TypeError('O porte deve ser uma string');
  }

  const porteCorrigido = porte.trim().toLowerCase();

  switch (porteCorrigido) {
    case 'pequeno':
      return 'brincar dentro de casa';
    case 'médio':
      return 'caminhada no quarteirão';
    case 'grande':
      return 'correr no parque';
    default:
      throw new Error('Porte inválido');
  }
}

console.log(decidirTipoDeAtividadePorPorte('pequeno'));  // brincar dentro de casa
console.log(decidirTipoDeAtividadePorPorte('MÉDIO'));    // caminhada no quarteirão
console.log(decidirTipoDeAtividadePorPorte(' grande ')); // correr no parque

// Simula uma operação assíncrona que busca um dado e retorna 'Pipoca' após um pequeno atraso.
async function buscarDadoAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100); // 100ms de atraso
  });
}

buscarDadoAsync()
  .then(resultado => console.log('Resultado:', resultado))
  .catch(erro => console.error('Erro:', erro));

export { geradorDeTagsDeIdentificacao, 
    verificarSePodeSerAdotado, 
    calcularConsumoDeRacao, 
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
 };
