function suma() {
  let numeroUno = parseFloat(document.getElementById("numero-uno").value)
  let numerodos = parseFloat(document.getElementById("numero-dos").value)

  let resultado = numeroUno + numerodos;

  document.getElementById('resultado').value = resultado
}