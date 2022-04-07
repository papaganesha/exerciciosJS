let arrayNmrs = [];
let finished = false;

let adicionar = () => {
  let numero = document.getElementById("nmro");
  let alert = document.getElementById("alerts");
  let select = document.getElementById("result");
  let result = document.getElementById("resultF");

  if (numero.value.length > 0) {
        numero = Number(numero.value);
        result.innerHTML = ``;
        alert.innerHTML = ``;

    if (finished == true) {
      select.innerHTML = ``;
    }

    if (numero > 0 && numero <= 99 && arrayNmrs.includes(numero) !== true) {
      let option = document.createElement("option");
      option.textContent = `Valor ${numero} foi adicionado`;
      arrayNmrs.push(numero);
      select.appendChild(option);
    } else {
      alert.textContent = `Numero deve estar entre 1 e 100 e nao repetido`;
    }
  } else {
    alert.textContent = `Preencha o campo com um numero`;
  }
};



let finalizar = () => {
  if (arrayNmrs.length > 0) {
    let result = document.getElementById("resultF");
    let p_length = document.createElement("p");
    let p_max = document.createElement("p");
    let p_min = document.createElement("p");
    let p_soma = document.createElement("p");
    let p_media = document.createElement("p");
    let soma = 0;
    let media = 0;

    result.innerHTML = ``;
    arrayNmrs.sort();

    p_length.textContent = `Foram ${arrayNmrs.length} numeros cadastrados ao total`;
    p_max.textContent = `Maior valor informado: ${
      arrayNmrs[arrayNmrs.length - 1]
    }`;
    p_min.textContent = `Menor valor informado: ${arrayNmrs[0]}`;

    for (let i = 0; i < arrayNmrs.length; i++) {
      soma += arrayNmrs[i];
    }
    media = Math.round(soma / arrayNmrs.length);

    p_soma.textContent = `A soma dos valores e: ${soma}`;
    p_media.textContent = `A media dos valores e: ${media}`;

    result.appendChild(p_length);
    result.appendChild(p_max);
    result.appendChild(p_min);
    result.appendChild(p_soma);
    result.appendChild(p_media);

    arrayNmrs = [];
    finished = true;
  } else {
    let alert = document.getElementById("alerts");
    alert.textContent = `Nenhum numero cadastrado, tente apos inserir`;
  }
};
