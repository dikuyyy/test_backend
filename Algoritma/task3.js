// Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

const input = ['xc', 'dz', 'bbb', 'dz']
const query = ['bbb', 'ac', 'dz']

const output = [];

query.forEach((queryItem) => {
    let counter = 0;
    input.forEach((inputItem) => {
        if(queryItem === inputItem) {
            counter++;
        }
    })
    output.push(counter);
})

console.info(output);