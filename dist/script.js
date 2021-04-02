var numeroVisor = "";
function adicionarNumero(numero) {
  numeroVisor += numero;
  document.getElementById("displayCalculadora").innerHTML = numeroVisor;
}

var resultado = 0;
var operacaoAnterior = 0;
function operacaoSoma() {
  if (operacaoAnterior == 0) {
    resultado = parseInt(numeroVisor);
    operacaoAnterior = 1;
  } else {
    if (operacaoAnterior == 1) {
      resultado = resultado + parseInt(numeroVisor);
    } else if (operacaoAnterior == 2) {
      resultado = resultado - parseInt(numeroVisor);
    } else if (operacaoAnterior == 3) {
      resultado = resultado * parseInt(numeroVisor);
    } else if (operacaoAnterior == 4) {
      if (parseInt(numeroVisor) == 0) {
        resultado = resultado;
      } else {
        resultado = resultado / parseInt(numeroVisor);
      }
    }
  }
  operacaoAnterior = 1;
  numeroVisor = "";
  document.getElementById("displayCalculadora").innerHTML = resultado;
}

function operacaoSubtracao() {
  if (operacaoAnterior == 0) {
    resultado = parseInt(numeroVisor) - 0;
    operacaoAnterior = 2;
  } else {
    if (operacaoAnterior == 1) {
      resultado = resultado + parseInt(numeroVisor);
    } else if (operacaoAnterior == 2) {
      resultado = resultado - parseInt(numeroVisor);
    } else if (operacaoAnterior == 3) {
      resultado = resultado * parseInt(numeroVisor);
    } else if (operacaoAnterior == 4) {
      if (parseInt(numeroVisor) == 0) {
        resultado = resultado;
      } else {
        resultado = resultado / parseInt(numeroVisor);
      }
    }
  }
  numeroVisor = "";
  operacaoAnterior = 2;
  document.getElementById("displayCalculadora").innerHTML = resultado;
}

function operacaoMultiplicacao() {
  if (operacaoAnterior == 0) {
    resultado = parseInt(numeroVisor);
    operacaoAnterior = 3;
  } else {
    if (operacaoAnterior == 1) {
      resultado = resultado + parseInt(numeroVisor);
    } else if (operacaoAnterior == 2) {
      resultado = resultado - parseInt(numeroVisor);
    } else if (operacaoAnterior == 3) {
      resultado = resultado * parseInt(numeroVisor);
    } else if (operacaoAnterior == 4) {
      if (parseInt(numeroVisor) == 0) {
        resultado = resultado;
      } else {
        resultado = resultado / parseInt(numeroVisor);
      }
    }
  }
  operacaoAnterior = 3;
  numeroVisor = "";
  document.getElementById("displayCalculadora").innerHTML = resultado;
}

function operacaoDivisao() {
  if (operacaoAnterior == 0) {
    resultado = parseInt(numeroVisor);
    operacaoAnterior = 4;
  } else if (parseInt(numeroVisor) != 0) {
    if (operacaoAnterior == 1) {
      resultado = resultado + parseInt(numeroVisor);
    } else if (operacaoAnterior == 2) {
      resultado = resultado - parseInt(numeroVisor);
    } else if (operacaoAnterior == 3) {
      resultado = resultado * parseInt(numeroVisor);
    } else if (operacaoAnterior == 4) {
      if (parseInt(numeroVisor) == 0) {
        resultado = resultado;
      } else {
        resultado = resultado / parseInt(numeroVisor);
      }
    }
  }
  operacaoAnterior = 4;
  numeroVisor = "";
  document.getElementById("displayCalculadora").innerHTML = resultado;
}

function operacaoResultado() {
  if (operacaoAnterior == 0) {
    resultado = parseInt(numeroVisor);
    operacaoAnterior = 0;
  } else {
    if (operacaoAnterior == 1) {
      resultado = resultado + parseInt(numeroVisor);
    } else if (operacaoAnterior == 2) {
      resultado = resultado - parseInt(numeroVisor);
    } else if (operacaoAnterior == 3) {
      resultado = resultado * parseInt(numeroVisor);
    } else if (operacaoAnterior == 4) {
      if (parseInt(numeroVisor) == 0) {
        resultado = resultado;
      } else {
        resultado = resultado / parseInt(numeroVisor);
      }
    }
  }
  operacaoAnterior = 0;
  numeroVisor = resultado;
  document.getElementById("displayCalculadora").innerHTML = resultado;
}