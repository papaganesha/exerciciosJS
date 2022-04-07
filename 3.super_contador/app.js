let countIt = ()=>{
    let inicio = document.getElementById("inicial");
    let final = document.getElementById("final");
    let passo = document.getElementById("passo");
    let result = document.getElementById("result");
    let textSuccess = document.createElement("p");
    let textError = document.createElement("p");
    let alertP = document.getElementById("alerts");
    result.innerHTML = "";
    alertP.innerHTML = "";
    if(Number(passo.value) === 0){
        alertP.textContent = `Passo nao pode ser 0, mudando para passo = 1`;
        passo.value = 1;
    }
    if(inicio.value.length === 0 || final.value.length === 0 || passo.value.length === 0){
        alertP.textContent = `Preencha todos os campos`;
        result.appendChild(textError);
    }
    else{
        textSuccess.innerHTML = `Contando: `;
        let ini = Number(inicio.value);
        let fim = Number(final.value);
        let pass = Number(passo.value);
        if(ini !== fim && ini < fim){
            for(let i = ini; i <= fim; i += pass){
                textSuccess.textContent += `${i} 👉 `;
            }
        }
        else{
            for(let i = ini; i >= fim; i -= pass){
                textSuccess.textContent += `${i} 👉 `;
            }
        }
        textSuccess.textContent += `🏁`;
        result.appendChild(textSuccess);
    }

}
