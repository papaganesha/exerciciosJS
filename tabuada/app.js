let tabuada = () =>{
    let numero = document.getElementById("nmro");
    let alert, result;
    result = document.getElementById("result");
    alert  = document.getElementById("alerts");
    //Caso usuario coloque input 
    if(numero.value.length > 0){
        //Seta Alert e Result <div> para vazias e remove estilo do Alert
        result.innerHTML = "";
        alert.innerHTML = "";
        alert.style = "none";
        numero = Number(numero.value);
        for(i = 0; i <= 10; i++){
            let option = document.createElement("option");
            console.log(`${numero} x ${i} = ${numero*i}`);
            option.textContent = `${numero} x ${i} = ${numero*i}`;
            result.appendChild(option);
        }
    }
    //Caso usuario nao coloque nada no Input
    else{
        //Seta estilo e textContent do Alert <p> e remove conteudo da Result <div>
        alert.style.marginBottom = '2rem';
        alert.style.border = '1px solid black';
        alert.style.padding = '10px 10px';
        alert.style.borderRadius = '10px';
        result.innerHTML = "";
        alert.textContent = `Voce deve informar um numero`;
    }
    }
    