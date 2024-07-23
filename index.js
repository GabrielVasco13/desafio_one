window.onload = function() {
    window.encrypt = function() {
        console.log("Encrypt button clicked");
        var inputText = document.getElementById("input-text").value;
        var encryptedText = caesarCipher(inputText, 3);
        document.getElementById("outputText").innerText = encryptedText;

        document.getElementById("right-panel-title").innerText = "Texto Criptografado";
        document.getElementById("right-panel-content").innerText = encryptedText;
    }

    window.decrypt = function() {
        console.log("Decrypt button clicked");
        var inputText = document.getElementById("input-text").value;
        var decryptedText = caesarCipher(inputText, -3);
        document.getElementById("outputText").innerText = decryptedText;

        document.getElementById("right-panel-title").innerText = "Texto Descriptografado";
        document.getElementById("right-panel-content").innerText = decryptedText;
    }
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