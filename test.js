function mn(n) {
  const matriz = [];
  const primeiraLinha = new Array(n).fill('n');
  matriz.push(primeiraLinha);

  for (let i = 1; i < n; i++) {
    matriz.push(new Array(n).fill(1));
  }

  return matriz;
}

function me(n) {
  const matriz = [];

  const primeiraLinha = new Array(n).fill('e');
  matriz.push(primeiraLinha);

  for (let i = 1; i < n; i++) {
    const linha = new Array(n).fill(1);
    if (i !== 0) {
      linha[n - 1] = 'e';
    }
    matriz.push(linha);
  }

  return matriz;
}

function me(n) {
  const matriz = [];

  const primeiraLinha = new Array(n).fill('e');
  matriz.push(primeiraLinha);

  for (let i = 1; i < n; i++) {
    const linha = new Array(n).fill(1);
    if (i !== 0) {
      linha[n - 1] = 'e';
    }
    matriz.push(linha);
  }

  return matriz;
}

console.log(me(4));