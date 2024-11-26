function suma() {
  var numero1 = parseFloat(document.getElementById("number_one").value);
  var numero2 = parseFloat(document.getElementById("number_two").value);

  var resultado = numero1 + numero2;

  document.getElementById("resultado").value = resultado;
}
