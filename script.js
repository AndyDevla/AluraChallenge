


function buttonEncriptar() {
    var textboxEncrypt = document.getElementById("textboxEncrypt").value.toLowerCase();
    //alert(textboxEncrypt);

    var textEncrypted = textboxEncrypt.replace(/e/img, "enter");
    var textEncrypted = textEncrypted.replace(/i/img, "imes");
    var textEncrypted = textEncrypted.replace(/a/img, "ai");
    var textEncrypted = textEncrypted.replace(/o/img, "ober");
    var textEncrypted = textEncrypted.replace(/u/img, "ufat");

    document.getElementById("textboxDecrypt").innerHTML = textEncrypted;
}

function buttonDesencriptar(){
    alert('desencriptar');
}