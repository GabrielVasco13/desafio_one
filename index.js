window.onload = function() {
    window.encrypt = function() {
        console.log("Encrypt button clicked");
        var inputText = document.getElementById("input-text").value;
        var encryptedText = encryptText(inputText);
        document.getElementById("outputText").innerText = encryptedText;

        document.getElementById("right-panel-title").innerText = "Texto Criptografado";
        document.getElementById("right-panel-content").innerText = encryptedText;
    }

    window.decrypt = function() {
        console.log("Decrypt button clicked");
        var inputText = document.getElementById("input-text").value;
        var decryptedText = decryptText(inputText);
        document.getElementById("outputText").innerText = decryptedText;

        document.getElementById("right-panel-title").innerText = "Texto Descriptografado";
        document.getElementById("right-panel-content").innerText = decryptedText;
    }
}

function encryptText(str) {
    return str.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function decryptText(str) {
    return str.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
}

function caesarCipher(str, shift) {
    return str.split('').map(function(char) {
        var charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + shift + 26) % 26 + 97);
        }
        return char;
    }).join('');
}