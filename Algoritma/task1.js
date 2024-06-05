// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const str = 'NEGIE1';
let reversedStr = [];
const split = str.split('');
let counter = split.length - 1;

for (let i = 0; i < split.length; i++) {
    if(split[counter] === '1') {
        reversedStr[counter] = split[counter];
    } else {
        reversedStr[i-1] = split[counter];
    }
    counter--
}
reversedStr = reversedStr.join("");
console.info(reversedStr);



