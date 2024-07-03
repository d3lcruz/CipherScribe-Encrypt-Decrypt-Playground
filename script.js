function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = customEncrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = customDecrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');

    // Limpiar los textos después de copiar
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function customEncrypt(str) {
    const map = {
        'a': 'co',
        'e': 'li',
        'i': 'za',
        'o': 'ma',
        'u': 'pe'
    };
    return str.split('').map(char => map[char] || char).join('');
}

function customDecrypt(str) {
    const map = {
        'co': 'a',
        'li': 'e',
        'za': 'i',
        'ma': 'o',
        'pe': 'u'
    };
    let result = '';
    for (let i = 0; i < str.length; ) {
        if (i + 1 < str.length && map[str.substring(i, i + 2)]) {
            result += map[str.substring(i, i + 2)];
            i += 2;
        } else {
            result += str[i];
            i += 1;
        }
    }
    return result;
}
