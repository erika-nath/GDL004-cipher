window.cipher = {
  // Acá escribe tu
/*  }
  function ATH(s) { // Convierte una cadena ASCII to HEX
    for (var ath="", i=0; i<s.length-1; i+=2) {
      ath += String.fromCharCode(parseInt(s.substr(i,2),16));
    }
    return ath;
  }

  function HTA(s) { // Convierte una cadena HEX a ASCII
    for (var hta="", i=0; i<s.length; i++) {
      var z = "0"+s.charCodeAt(i).toString(16).toUpperCase();
      hta += z.substr(z.length-2,2);
    }
    return hta;
  }

}*/

encode: (password, message) => {
  let codificado= "";
  for(let i=0; i<message.length; i++){
    let code= message.charCodeAt(i);
    code=(code-65+ password)% 26 +65;
    codificado+= String.fromCharCode(code);
  }
  return codificado;
},
decode: (password, message) => {
  let decodificado= "";
  for(let i=0; i<message.length; i++){
    let code= message.charCodeAt(i);
    code=(code-65- password)%26 +65;
    decodificado+= String.fromCharCode(code);
  }
  return decodificado;
}
}
