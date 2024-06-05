//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

const diagonalDifference = (matrix) => {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    matrix.forEach((item, index) => {
        primaryDiagonalSum += matrix[index][index];
        secondaryDiagonalSum += matrix[index][matrix.length - 1 - index]
    })

    return primaryDiagonalSum - secondaryDiagonalSum;
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

console.info(diagonalDifference(matrix));