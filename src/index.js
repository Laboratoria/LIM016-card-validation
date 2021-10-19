import validator from './validator.js';
document.getElementById("validMask").onclick=function(){
    let rightEmoji=String.fromCodePoint(0x2714)
    let wrongEmoji=String.fromCodePoint(0x274C)
    let creditCardNumber=document.getElementById("cardNum").value
    let cardLength=creditCardNumber.length
    if(cardLength==0){
        document.getElementById("answer").style.color="red"
        document.getElementById("answer").innerHTML="Campo obligatorio"
    }else{
        let cardNumMask=document.getElementById("cardNum").textContent=validator.maskify(creditCardNumber)
        document.getElementById("cardNum").value=cardNumMask
        let cardNumIsValid=document.getElementById("cardNum").textContent=validator.isValid(creditCardNumber)
        if (cardNumIsValid==true){
            document.getElementById("answer").style.color="green"
            document.getElementById("answer").innerHTML="Numero de tarjeta válido"+rightEmoji
        }else{
            document.getElementById("answer").style.color="red"
            document.getElementById("answer").innerHTML="Numero de tarjeta inválido"+wrongEmoji
        }
    }  
}