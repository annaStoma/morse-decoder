const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = new Array();
    let result = [];
    let str = '';
    expr = expr.split('');
    for (let j = 0; j < expr.length; j = j + 10) {
        arr = expr.slice(j, j + 10);
        for (let i = 0; i <= arr.length; i = i + 2) {
            str = arr.join('');
            if (toString(arr[i] + arr[i + 1]) == '00') {
                result.push('noth')
            } else if ((arr[i] + arr[i + 1]) == '10') {
                result.push('.')

            } else if ((arr[i] + arr[i + 1]) == '11') {
                result.push('-')
            } else if (arr[i] == '*') {
                result.push(" ");
                i = i + 9;
            }
        }
        result.push("|")
    }
    result = result.join('').split("|");
    result.splice(result.length - 1, 1);
    let f = '';
    result.forEach(item => {
        if (item == " ") {
            f += " ";
        }
        for (let key of Object.keys(MORSE_TABLE)) {
            if (item == key) {
                f += MORSE_TABLE[key];
            }
        }
    })

    return f;
}

module.exports = {
    decode
}