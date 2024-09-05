//******************VARIABLES******************

let nombreJug = prompt("¿Cómo te llamas?");
let btnPiedra = document.getElementById("piedra");
let btnPapel = document.getElementById("papel");
let btnTijera = document.getElementById("tijera");
let pEleccion = document.getElementById("eleccion");
let pResultado = document.getElementById("resultado");
let pMarcador = document.getElementById("marcador");
let botElec = [
  btnPiedra.textContent,
  btnPapel.textContent,
  btnTijera.textContent,
];
let botElecR = null;
let con1 = 0;
let con2 = 0;

// ******************FUNCIONES******************

function reset() {
  pEleccion.textContent = "";
  pResultado.textContent = "";
  pResultado.style.border = "none";
  botElecR = Math.floor(Math.random() * botElec.length);
  desactiveButton();
}

function activeButton() {
  btnPiedra.disabled = false;
  btnPapel.disabled = false;
  btnTijera.disabled = false;
  btnPiedra.style.pointerEvents = "auto";
  btnPapel.style.pointerEvents = "auto";
  btnTijera.style.pointerEvents = "auto";
}

function desactiveButton() {
  btnPiedra.disabled = true;
  btnPapel.disabled = true;
  btnTijera.disabled = true;
  btnPiedra.style.pointerEvents = "none";
  btnPapel.style.pointerEvents = "none";
  btnTijera.style.pointerEvents = "none";
}

function piedra() {
  reset();

  setTimeout(() => {
    pEleccion.innerHTML = `${nombreJug} escoge: ${btnTijera.textContent}<br>&<br>BOTin eligió: ${botElec[botElecR]}`;
  }, 400);

  setTimeout(() => {
    switch (botElec[botElecR]) {
      case btnPiedra.textContent:
        pResultado.textContent = "¡EMPATE! 😐";
        pResultado.style.border = "3px solid black";
        break;
      case btnPapel.textContent:
        pResultado.textContent = "¡PERDISTE! 😭";
        pResultado.style.border = "3px solid red";
        con2++;
        break;
      case btnTijera.textContent:
        pResultado.textContent = "¡GANASTE! 😎";
        pResultado.style.border = "3px solid green";
        con1++;
        break;
    }
    showMarcador(con1, con2);
    activeButton();
  }, 1300);
}

function papel() {
  reset();

  setTimeout(() => {
    pEleccion.innerHTML = `${nombreJug} escoge: ${btnTijera.textContent}<br>&<br>BOTin eligió: ${botElec[botElecR]}`;
  }, 400);

  setTimeout(() => {
    switch (botElec[botElecR]) {
      case btnPiedra.textContent:
        pResultado.textContent = "¡GANASTE! 😎";
        pResultado.style.border = "3px solid green";
        con1++;
        break;
      case btnPapel.textContent:
        pResultado.textContent = "¡EMPATE! 😐";
        pResultado.style.border = "3px solid black";
        break;
      case btnTijera.textContent:
        pResultado.textContent = "¡PERDISTE! 😭";
        pResultado.style.border = "3px solid red";
        con2++;
        break;
    }
    showMarcador(con1, con2);
    activeButton();
  }, 1300);
}

function tijera() {
  reset();

  setTimeout(() => {
    pEleccion.innerHTML = `${nombreJug} escoge: ${btnTijera.textContent}<br>&<br>BOTin eligió: ${botElec[botElecR]}`;
  }, 400);

  setTimeout(() => {
    switch (botElec[botElecR]) {
      case btnPiedra.textContent:
        pResultado.textContent = "¡PERDISTE! 😭";
        pResultado.style.border = "3px solid red";
        con2++;
        break;
      case btnPapel.textContent:
        pResultado.textContent = "¡GANASTE! 😎";
        pResultado.style.border = "3px solid green";
        con1++;
        break;
      case btnTijera.textContent:
        pResultado.textContent = "¡EMPATE! 😐";
        pResultado.style.border = "3px solid black";
        break;
    }
    showMarcador(con1, con2);
    activeButton();
  }, 1300);
}

function showMarcador(con1, con2) {
  pMarcador.textContent = `${nombreJug}: ${con1} - BOTin: ${con2}`;
}

//******************EJECUCION******************

if (nombreJug) {
  nombreJug = nombreJug.slice(0, 17);
} else {
  nombreJug = "User";
}

showMarcador(con1, con2);

btnPiedra.addEventListener("click", () => {
  piedra();
});

btnPapel.addEventListener("click", () => {
  papel();
});

btnTijera.addEventListener("click", () => {
  tijera();
});
