// Soal:
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence = "Saya sangat senang mengerjakan soal algoritma"

const longest = (sentence) => {
    const split = sentence.split(" ")
    let longest = '';
    split.forEach((item) => {
        if(item.length > longest.length) {
            longest = item;
        }
    })
    return {
        word: longest,
        total_character: longest.length
    }
}

const result = longest(sentence);

console.info(`${result.word}: ${result.total_character} character`);