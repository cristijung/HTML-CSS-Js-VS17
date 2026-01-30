// código bem reduzido

const img = document.getElementById("cat-img");
const btn = document.getElementById("btn");
const errorDiv = document.getElementById("error-msg");

async function getCat() {
  errorDiv.innerText = "";

  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");

    // verificação da resposta do endpoint
    if (!response.ok) throw new Error("Erro ao conectar com a API");

    // estas duas linhas são o coração da comunicação com a API
    const data = await response.json();
    img.src = data[0].url;
  } catch (error) {
    console.error("Falha!", error);
    errorDiv.innerText = "Não foi possível carragar o cats lindo!!";
  }
}

btn.addEventListener('click', getCat);
getCat();