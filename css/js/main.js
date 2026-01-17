var saldo = parseFloat(localStorage.getItem("saldo")) || 0;
var historial = JSON.parse(localStorage.getItem("historial")) || [];

function actualizarSaldo() {
  if (document.getElementById("saldo")) {
    document.getElementById("saldo").textContent = "$" + saldo;
  }
  localStorage.setItem("saldo", saldo);
}

function agregarTransaccion(tipo, detalle, monto) {
  historial.push({
    tipo: tipo,
    detalle: detalle,
    monto: monto,
    saldo: saldo
  });
  localStorage.setItem("historial", JSON.stringify(historial));
}
