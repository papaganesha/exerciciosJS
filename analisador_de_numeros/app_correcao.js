
// Pegando valores e criando array
let numero = document.getElementById("nmro");
let select = document.getElementById("result");
let result = document.getElementById("resultF");
let arrayNmrs = [];


//Verifica se E numero, e se e maior que 1 && menor que 100
//retorna true se for numero dentro do range
function isNumero(nmr){
    if(Number(nmr) >= 1 && Number(nmr) <= 100){
        return true;
    }else{
        return false;
    }
}

//Verifica se nmr esta dentro do array
function inArray(nmr, array){
    if(array.indexOf(nmr) !== -1){
        return true;
    }else{
        return false;
    }
}


function adicionar(){
    //Chama as funcoes verifica nas condicionais
    if(isNumero(numero.value) && !inArray(numero.value, arrayNmrs)){
        //Adiciona numeros ao array, cria <option> e insere no <select>#result
        arrayNmrs.push(numero.value);
        let option = document.createElement("option");
        option.textContent = `Valor ${numero.value} foi adicionado`;
        select.appendChild(option);
        //Reseta o div#result quando adicionado novo numero
        result.innerHTML = ``;
    }else{
        window.alert("Valor invalido ou ja encontrado na lista")
    }
    //Limpa o Input e da foco nele
    numero.value = '';
    numero.focus();

}




function finalizar(){
    //Verifica se Array possui elementos
    if (arrayNmrs.length > 0) {
        //Cria os paragrafos, e variaveis de soma e media
        let pLength = document.createElement("p");
        let p_max = document.createElement("p");
        let p_min = document.createElement("p");
        let p_soma = document.createElement("p");
        let p_media = document.createElement("p");
        let soma = 0;
        let media = 0;
        
        //Ordena o Array -- facil de achar o maior e mnor numero
        arrayNmrs.sort();
        //Itera com for pra pegar a soma
        for (let i = 0; i < arrayNmrs.length; i++) {
            soma += Number(arrayNmrs[i]);
        }

        //Faz a media com a soma/numero de elementos no array
        media = (soma / arrayNmrs.length).toFixed(2);

        
        pLength.textContent = `Foram ${arrayNmrs.length} numeros cadastrados ao total`;
        p_max.textContent = `Maior valor informado: ${arrayNmrs[arrayNmrs.length - 1]}`;
        p_min.textContent = `Menor valor informado: ${arrayNmrs[0]}`;
        p_soma.textContent = `A soma dos valores e: ${soma}`;
        p_media.textContent = `A media dos valores e: ${media}`;
        
        //Reseta a div#result e insere todos os paragrafos nela
        result.innerHTML = ``;
        result.appendChild(pLength);
        result.appendChild(p_max);
        result.appendChild(p_min);
        result.appendChild(p_soma);
        result.appendChild(p_media);

      } else {
        window.alert(`Cadastre algum numero antes de finalizar`);
    }
}
