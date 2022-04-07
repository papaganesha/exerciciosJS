let verifica = () => {
    let data = new Date();
    let ano = data.getFullYear();
    let inputAno = document.getElementById("inputAno");
    let radio = document.getElementsByName("radsex");
    let resultado = document.getElementById("resultado");
    let resultIdade = ano - inputAno.value;
    let genero;
    let imagem = document.createElement("img");
    imagem.setAttribute("id", "foto");
    if(inputAno.value !== 0 && inputAno.value < ano && inputAno.value > 1910){
        if(radio[0].checked){
            genero = "Masculino";
            if(resultIdade > 0 && resultIdade <= 10){
                //criança
                imagem.setAttribute("src", "imgs/homem_crianca.jpg");
            }
            else if(resultIdade < 21){
                //jovem
                imagem.setAttribute("src", "imgs/homem_jovem.jpg");
            }
            else if(resultIdade < 60){
                //adulto
                imagem.setAttribute("src", "imgs/homem_adulto.jpg");
            }
            else{
                //idoso   
                imagem.setAttribute("src", "imgs/homem_idoso.jpg");  
            }
        }
        else{
            genero = "Feminino";
            if(resultIdade > 0 && resultIdade <= 10){
                //criança
                imagem.setAttribute("src", "imgs/mulher_crianca.jpg");
            }
            else if(resultIdade < 21){
                //jovem
                imagem.setAttribute("src", "imgs/mulher_jovem.jpg");
            }
            else if(resultIdade < 60){
                //adulta
                imagem.setAttribute("src", "imgs/mulher_adulta.jpg");
            }
            else{
                //idosa  
                imagem.setAttribute("src", "imgs/mulher_idosa.jpg");  
            }
        }
        let insertIt = document.createElement("p");
        insertIt.textContent = `Detectamos ${genero} com ${resultIdade} anos`;
        resultado.innerHTML = "";
        resultado.appendChild(insertIt);
        resultado.appendChild(imagem);
    }
    
    else{
        alert("Verifique os dados e digite novamente");
    }
  
}