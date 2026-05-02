/* ==========================================================================
   MUSEO SAN FRANCISCO - SCRIPT DE EVALUACIÓN INTERACTIVA
   Autor: Juan David Figueroa Miño
   Descripción: Lógica para calcular y mostrar la nota del formulario HTML.
   ========================================================================== */

function evaluarQuiz() {
  // --- 1. CONFIGURACIÓN INICIAL ---
  let puntaje = 0;
  const totalPreguntas = 5;

  // --- 2. CAPTURA DE RESPUESTAS DEL USUARIO ---
  const q1 = document.querySelector('input[name="p1"]:checked');
  const q2 = document.querySelector('input[name="p2"]:checked');
  const q3 = document.querySelector('input[name="p3"]:checked');
  const q4 = document.querySelector('input[name="p4"]:checked');
  const q5 = document.querySelector('input[name="p5"]:checked');

  // --- 3. VALIDACIÓN DE CAMPOS VACÍOS ---
  // Si falta al menos una respuesta, lanza alerta y detiene la función
  if(!q1 || !q2 || !q3 || !q4 || !q5) {
    alert("¡Faltan respuestas! Por favor, selecciona una opción para las 5 preguntas antes de calificar.");
    return;
  }

  // --- 4. CÁLCULO DE PUNTAJE Y NOTA FINAL ---
  // Suma de values (1 = Correcta, 0 = Incorrecta)
  puntaje += parseInt(q1.value) + parseInt(q2.value) + parseInt(q3.value) + parseInt(q4.value) + parseInt(q5.value);
  let notaFinal = (puntaje / totalPreguntas) * 10;

  // --- 5. PREPARACIÓN DEL CONTENEDOR Y MENSAJE BASE ---
  let mensaje = `Tu calificación final es: ${notaFinal} / 10. <br><br>`;
  const resultadoDiv = document.getElementById('resultado');

  // --- 6. RETROALIMENTACIÓN Y ESTILOS DINÁMICOS SEGÚN LA NOTA ---
  if(notaFinal >= 8) {
    mensaje += "¡Excelente trabajo! Conoces muy bien la historia del complejo franciscano y la Escuela Quiteña.";
    resultadoDiv.style.backgroundColor = "#e8f6e9"; resultadoDiv.style.color = "#2e7d32"; resultadoDiv.style.border = "1px solid #4caf50";
  } else if(notaFinal >= 6) {
    mensaje += "Buen intento, pero te recomiendo repasar algunos detalles históricos y arquitectónicos.";
    resultadoDiv.style.backgroundColor = "#fff8e1"; resultadoDiv.style.color = "#f57f17"; resultadoDiv.style.border = "1px solid #ffb300";
  } else {
    mensaje += "Vuelve a leer cuidadosamente las secciones de historia y vuelve a intentarlo.";
    resultadoDiv.style.backgroundColor = "#ffebee"; resultadoDiv.style.color = "#c62828"; resultadoDiv.style.border = "1px solid #e53935";
  }

  // --- 7. IMPRESIÓN DEL RESULTADO EN PANTALLA ---
  resultadoDiv.innerHTML = mensaje;
}
