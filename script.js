


function buttonEncriptar() {
    if (document.getElementById("textboxEncrypt").value != "") {
        var textboxEncrypt = document.getElementById("textboxEncrypt").value.toLowerCase();
        var textEncrypted = textboxEncrypt.replace(/e/img, "enter");
        var textEncrypted = textEncrypted.replace(/i/img, "imes");
        var textEncrypted = textEncrypted.replace(/a/img, "ai");
        var textEncrypted = textEncrypted.replace(/o/img, "ober");
        var textEncrypted = textEncrypted.replace(/u/img, "ufat");
    
        document.getElementById("textboxDecrypt").innerHTML = textEncrypted;
        document.getElementById("muneco").style.visibility = 'hidden';
        document.getElementById("textoMuneco1").style.display = 'none';
        document.getElementById("textoMuneco2").style.display = 'none';
        document.getElementById("textboxDecrypt").style.display = 'flex';
        document.getElementById("buttonCopiar").style.display = 'inline-table';
    }
    else{
        alert("No olvides ingresar el texto a encriptar ;D.")
    }


}



function buttonCopiar() {
    var textCopy = document.getElementById("textboxDecrypt");
    console.log(textCopy.value);
    textCopy.select();
    document.execCommand("copy");
    alert("Texto copiado.")
    
    // navigator.clipboard.writeText(textCopy).then(
    //     () => {
    //       alert("Copiado.")
    //     },
    //     () => {
    //       alert("Fallo al copiar.")
    //     }
    //   );
}

function buttonDesencriptar() {
    var textboxEncrypt = document.getElementById("textboxEncrypt").value.toLowerCase();
    //alert(textboxEncrypt);

    var textEncrypted = textboxEncrypt.replace(/enter/img, "e");
    var textEncrypted = textEncrypted.replace(/imes/img, "i");
    var textEncrypted = textEncrypted.replace(/ai/img, "a");
    var textEncrypted = textEncrypted.replace(/ober/img, "o");
    var textEncrypted = textEncrypted.replace(/ufat/img, "u");

    document.getElementById("textboxDecrypt").innerHTML = textEncrypted;
}