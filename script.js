function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const resultados = document.getElementById("resultados");

  resultados.innerHTML = ""; // Limpiar resultados anteriores

  for (let i = 1; i <= 5; i++) {
    let texto = "";

    switch (i) {
      case 1:
        texto = `1. Suma: ${n1 + n2}`;
        break;
      case 2:
        texto = `2. Resta: ${n1 - n2}`;
        break;
      case 3:
        texto = `3. Multiplicación: ${n1 * n2}`;
        break;
      case 4:
        texto = n2 !== 0 ? `4. División: ${n1 / n2}` : "4. División: Error (división por cero)";
        break;
      case 5:
        texto = n2 !== 0 ? `5. Módulo: ${n1 % n2}` : "5. Módulo: Error (módulo por cero)";
        break;
    }

    const p = document.createElement("p");
    p.textContent = texto;
    resultados.appendChild(p);
  }
}
