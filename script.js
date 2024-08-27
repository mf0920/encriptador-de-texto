const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const textoEncriptado = Encriptar(textArea.value)
function btnEncriptar() {
    function Encriptar(stringEncriptada){  


        let matrizCodigo = [ ["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        console.log(matrizCodigo)
        
        stringEncriptada= stringEncriptada.toLowerCase()
            for(let i = 0; i< matrizCodigo.length; i++){
                if(stringEncriptada.includes(matrizCodigo[i][0])){
                    stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
                }
            }
            return stringEncriptada;
         }
             
            
    
}



     
    














