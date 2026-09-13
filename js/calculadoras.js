// Pega os elementos do formulário pelo id que demos no HTML
const inputFuro = document.getElementById("furo");
const inputCurso = document.getElementById("curso");
const inputCilindros = document.getElementById("cilindros");
const botaoCalcular = document.getElementById("btn-cilindrada");
const divResultado = document.getElementById("resultado-cilindrada");

// addEventListener "escuta" o clique no botão e roda a função quando acontecer
botaoCalcular.addEventListener("click", function () {

  // Todo valor digitado num <input> chega como texto (string).
  // parseFloat/parseInt convertem esse texto em número, senão não dá pra fazer conta.
  const furo = parseFloat(inputFuro.value);
  const curso = parseFloat(inputCurso.value);
  const cilindros = parseInt(inputCilindros.value);

  // Validação: se o usuário deixou algo em branco ou digitou algo inválido,
  // parseFloat/parseInt retornam NaN ("Not a Number"). Checamos isso antes de calcular.
  if (isNaN(furo) || isNaN(curso) || isNaN(cilindros) || furo <= 0 || curso <= 0 || cilindros <= 0) {
    divResultado.textContent = "Preencha furo, curso e número de cilindros com valores válidos.";
    return; // "return" para a função aqui, sem calcular nada
  }

  // Volume de UM cilindro = área do círculo (π/4 × furo²) × curso
  // Furo e curso em mm, então o resultado sai em mm³
  const volumeUmCilindro = (Math.PI / 4) * Math.pow(furo, 2) * curso;
  const cilindradaMm3 = volumeUmCilindro * cilindros;

  // Convertendo unidades: 1 cm³ = 1000 mm³, 1 litro = 1000 cm³, 1 pol³ = 16.387 cm³
  const cilindradaCc = cilindradaMm3 / 1000;
  const cilindradaLitros = cilindradaCc / 1000;
  const cilindradaPolegadas = cilindradaCc / 16.387;

  // Template literal (crase `` em vez de aspas) permite inserir variáveis com ${...}
  divResultado.textContent =
    `Cilindrada: ${cilindradaCc.toFixed(0)} cc — ${cilindradaLitros.toFixed(2)} L — ${cilindradaPolegadas.toFixed(1)} pol³`;
});