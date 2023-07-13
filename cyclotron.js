// The use of the fill() method was chosen instead of a for loop because the values to be filled in the matrix are static and repetitive
// The fill() method is more suitable in this case as it is internally implemented in an optimized manner, making it more efficient
function createMatrix(size) {
  return new Array(size).fill(1).map((element) => new Array(size).fill(element));
}

function replaceRow(matrix, size, particle, row) {
  if (row >= size) row = size - 1; // condition that does not allow to create a new row

  matrix.splice(row, 1, new Array(size).fill(particle)); // replace the row's corresponding array with a new one
}

function replaceColumn(matrix, size, particle, column) {
  if (column >= size) column = size - 1; // condition that does not allow to create a new column

  matrix.map((rows) => rows.splice(column, 1, particle)); // for each row, replace the column's corresponding element with a new one
}

function replaceElement(matrix, size, particle, row, column) {
  if (row >= size) row = size - 1;
  if (column >= size) column = size - 1;
  if (row < -size) row = 0; // limiting condition for negative values
  if (row < 0) row = size + row; // condition to resolve negative values

  matrix[row].splice(column, 1, particle); // for the specified row, replace the column's corresponding element with a new one
}

// Neutrons
function nParticle(size) {
  const particle = 'n';
  const matrix = createMatrix(size);

  replaceRow(matrix, size, particle, 0);

  return matrix;
}

// Electrons
function eParticle(size) {
  const particle = 'e';
  const matrix = createMatrix(size);

  replaceRow(matrix, size, particle, 0);
  replaceColumn(matrix, size, particle, -1);

  return matrix;
}

// Protons
function pParticle(size) {
  const particle = 'p';
  const matrix = createMatrix(size);

  replaceRow(matrix, size, particle, 0);
  replaceRow(matrix, size, particle, -1);
  replaceColumn(matrix, size, particle, 0);
  replaceColumn(matrix, size, particle, -1);
  replaceElement(matrix, size, particle, -2, -2);
  replaceElement(matrix, size, 1, -1, -1);

  return matrix;
}

function generateCyclotron(particle, size) {
  if (size < 4) size = 4; // condition that does not allow matrices smaller than 4

  if (particle === 'w') return createMatrix(size);
  if (particle === 'n') return nParticle(size);
  if (particle === 'e') return eParticle(size);
  if (particle === 'p') return pParticle(size);

  return `correct input type -> (particle, matrix)

    - PARTICLE options:
    particle type must be a string
    "w": without particles
    "n": neutrons
    "e": electrons
    "p": protons
    
    - MATRIX options:
    matrix type must be an integer
    if matrix < 4, it will be considered 4`;
}

// generateCyclotron('p', 5);

// visual examples:
// console.log(generateCyclotron('w', 3));
// console.log(generateCyclotron('q', 4));
// console.log(generateCyclotron('e', 5));
// console.log(generateCyclotron('p', 6));
// console.log(generateCyclotron('3', 6));
// console.log(Array.from({ length: 4 }, () => 1));