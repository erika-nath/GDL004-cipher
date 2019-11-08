/*window.onload=() => {

  function encrypt(){
       var

      message=document.getElementById("message").value;
       password=document.getElementById("password").value;

       var encrypted=crypt(message,password);
       document.getElementById("encrypted").value=encrypted;

       var encrypted=crypt(message,password);
       document.getElementById("encrypted_ASCII").value=HTA(encrypted);

       var decrypted=crypt(encrypted,password);
     document.getElementById("decrypted").value=decrypted;
   }

   ///const botontextencode=document.getElementById("id de boton");
  // nombre de constante.addEventlistened(click,funcion()){
//variablescon value
//document.getElementById("boxmsg2").innerHTML=window.cipher.decode(message y password):

}*********************************************************/



function encodeButton(){
    const offset= parseInt(document.getElementById("caja").value);
    const message= document.getElementById("inputText").value;
    let mensajeFinal= window.cipher.encode(offset, message);
    document.getElementById("RespuestaCodificada").innerHTML= mensajeFinal;
}

function decodeButton(){
    const offset= parseInt(document.getElementById("caja").value);
    const message= document.getElementById("inputText").value;

    let mensajeFinal= window.cipher.decode(offset, message);
    document.getElementById("RespuestaDecodificada").innerHTML= mensajeFinal;
}
