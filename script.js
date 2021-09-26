var numeroSecreto = parseInt(Math.random() * 11);

var tentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Você acertou. Parabéns! O número é =" +
      numeroSecreto +
      "  <img src='https://c.tenor.com/WyJtCMu-5FcAAAAC/congratulations-clapping.gif' class='venceu' alt=''> ";
  } else if (chute > 10) {
    alert("Você deve digitar um número de 0 a 10");
  } else if (tentativas > 0) {
    tentativas--;
  }
  if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Quaaase! O número é menor. " + tentativas + " Tentativas.";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Quaaase! O número é maior. " + tentativas + " Tentativas.";
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML =
      "Você perdeu! Não foi dessa vez, o número era = " +
      numeroSecreto +
      "  <img src='https://i.gifer.com/QeMS.gif' class='gameOver' alt=''> ";
  }
}

function Reset() {
  botao.disabled = false;
  var campoEmBranco = document.querySelector("input");
  campoEmBranco.value = "";
  campoEmBranco.focus();
  var elementoResultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
}